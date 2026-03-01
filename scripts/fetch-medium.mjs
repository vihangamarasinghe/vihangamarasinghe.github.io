import fs from 'node:fs/promises';
import path from 'node:path';
import Parser from 'rss-parser';

const root = process.cwd();
const configPath = path.join(root, 'src/data/medium.config.json');
const outputPath = path.join(root, 'src/data/medium.generated.json');

const readJson = async (filePath) => {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
};

const stripHtml = (value) => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

const truncate = (value, maxLength) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 1)}…` : value;

const firstSentence = (value) => {
  const match = value.match(/.+?[.!?](?:\s|$)/);
  if (!match) return null;
  return match[0].trim();
};

const summarize = (value, maxLength) => {
  if (!value) return '';
  const sentence = firstSentence(value);
  const candidate = sentence && sentence.length <= maxLength ? sentence : value;
  return truncate(candidate, maxLength);
};

const writeOutput = async (payload) => {
  const content = `${JSON.stringify(payload, null, 2)}\n`;
  await fs.writeFile(outputPath, content, 'utf8');
};

const loadConfig = async () => {
  try {
    return await readJson(configPath);
  } catch (error) {
    console.error('[medium] Failed to read config:', error);
    return {};
  }
};

const parseFeed = async (feedUrl, config) => {
  const parser = new Parser({
    customFields: {
      item: ['content:encoded', 'content:encodedSnippet', 'content']
    }
  });

  const feed = await parser.parseURL(feedUrl);
  const maxItems = Number.isFinite(config.maxItems) ? config.maxItems : 3;

  const items = (feed.items ?? [])
    .filter((item) => item?.link || item?.guid)
    .slice(0, Math.max(0, maxItems))
    .map((item) => {
      const rawExcerpt =
        item.contentSnippet ||
        item['content:encodedSnippet'] ||
        (item['content:encoded'] ? stripHtml(item['content:encoded']) : '') ||
        (item.content ? stripHtml(item.content) : '');

      return {
        title: item.title?.trim() || 'Untitled',
        url: item.link || item.guid || '',
        date: item.isoDate || item.pubDate || '',
        excerpt: rawExcerpt ? summarize(rawExcerpt, 150) : ''
      };
    });

  return {
    source: {
      title: feed.title || config.sourceLabel || 'Medium',
      url: feed.link || config.sourceUrl || ''
    },
    lastUpdated: new Date().toISOString(),
    items
  };
};

const main = async () => {
  const config = await loadConfig();
  const feedUrl = process.env.MEDIUM_FEED_URL || config.feedUrl;

  if (!feedUrl) {
    console.warn('[medium] No feed URL configured. Set MEDIUM_FEED_URL or update src/data/medium.config.json.');
    await writeOutput({
      source: {
        title: config.sourceLabel || 'Medium',
        url: config.sourceUrl || ''
      },
      lastUpdated: new Date().toISOString(),
      items: []
    });
    return;
  }

  try {
    const payload = await parseFeed(feedUrl, config);
    await writeOutput(payload);
    console.log(`[medium] Fetched ${payload.items.length} items.`);
  } catch (error) {
    console.error('[medium] Failed to fetch feed:', error);

    try {
      await fs.access(outputPath);
      console.warn('[medium] Using existing generated data.');
    } catch {
      await writeOutput({
        source: {
          title: config.sourceLabel || 'Medium',
          url: config.sourceUrl || ''
        },
        lastUpdated: new Date().toISOString(),
        items: []
      });
    }
  }
};

await main();
