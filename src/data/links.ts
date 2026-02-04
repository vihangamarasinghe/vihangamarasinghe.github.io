export type LinkKind = 'primary' | 'contact' | 'resume';

export type LinkItem = {
  label: string;
  href: string;
  kinds: LinkKind[];
};

export const links: LinkItem[] = [
  { label: 'Email', href: 'mailto:hello@example.com', kinds: ['primary', 'contact'] },
  { label: 'GitHub', href: 'https://github.com/username', kinds: ['primary', 'contact'] },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/username', kinds: ['primary', 'contact'] },
  { label: 'Resume', href: '/resume.pdf', kinds: ['resume'] }
];
