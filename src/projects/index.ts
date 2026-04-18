// Define what a project looks like
export interface Project {
  id: string;
  title: string;
  path: string;
  component: React.ComponentType;
  description: string;
  thumbnail?: string;
}

import Project01 from './01-counter-app/main';

export const projectRegistry: Project[] = [
  {
    id: 'counter-app',
    title: 'Counter Timer',
    path: '/projects/counter',
    component: Project01,
    description: 'A simple counter tool.'
  },
];