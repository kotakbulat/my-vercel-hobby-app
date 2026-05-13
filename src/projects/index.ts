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
import Project03 from './03-modular-dashboard/index';
import Project04 from './04-voucher-generator/App';
import Project05 from './05-affiliation-flow/App';


export const projectRegistry: Project[] = [
  {
    id: 'counter-app',
    title: 'Simple Counter',
    path: '/projects/counter-app',
    component: Project01,
    description: 'A simple counter tool.'
  },
  {
    id: 'socmed-agg-app',
    title: 'Mock Feeds',
    path: '/projects/socmed-agg-app',
    component: Project02,
    description: 'simulate a unified social media feed by combining content from multiple platforms into a single scrolling'
  },
  {
    id: 'modular-dashboard',
    title: 'Modular Dashboard',
    path: '/projects/modular-dashboard',
    component: Project03,
    description: 'A simple modular scalable dashboard platform'
  },
  {
    id: 'voucher-generator',
    title: 'Mock Voucher Generator',
    path: '/projects/voucher-generator',
    component: Project04,
    description: 'A simple randomized mock voucher generator'
  },
  {
    id: 'affiliation-flow',
    title: 'Mock Affiliation',
    path: '/projects/affiliation-flow',
    component: Project05,
    description: 'A simple mock Affiliation Flow Page'
  },
];