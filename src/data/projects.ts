export type ProjectItem = {
  name: string;
  description: string;
  href?: string;
  highlights?: string[];
};

export const projects: ProjectItem[] = [
  {
    name: 'Project One',
    description: 'Short description of the project and the problem it solves.',
    href: 'https://example.com',
    highlights: ['Key outcome or metric', 'Notable technology or approach']
  },
  {
    name: 'Project Two',
    description: 'Short description of the project and the problem it solves.',
    href: 'https://example.com',
    highlights: ['Key outcome or metric', 'Notable technology or approach']
  }
];
