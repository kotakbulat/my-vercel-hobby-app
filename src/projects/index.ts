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
import Project02 from './02-multiplatform-socmedagg/App';


export const projectRegistry: Project[] = [
  {
    id: 'counter-app',
    title: 'Counter Timer',
    path: '/projects/counter-app',
    component: Project01,
    description: 'A simple counter tool.'
  },
  {
    id: 'socmed-agg-app',
    title: 'Unified Social Feed',
    path: '/projects/socmed-agg-app',
    component: Project02,
    description: 'simulate a unified social media feed by combining content from multiple platforms into a single scrolling'
  },
];