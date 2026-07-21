export type ContentItem = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: 'project' | 'publication' | 'software';
  year?: string;
  authors?: string;
  image?: string;
};

export const projects: ContentItem[] = [
  {
    id: 'humanoid-robotics-platform',
    slug: 'humanoid-robotics-platform',
    title: 'Humanoid robotics platform',
    category: 'project',
    description:
      'A research-driven platform for dexterous manipulation, multimodal learning, and laboratory automation.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ultrasound-tactile-sensing',
    slug: 'ultrasound-tactile-sensing',
    title: 'Ultrasound tactile sensing',
    category: 'project',
    description:
      'Compact sensing systems that enable richer touch feedback for robotic hands and grippers.',
    image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=80',
  },
];

export const publications: ContentItem[] = [
  {
    id: 'embodied-intelligence-lab-automation',
    slug: 'embodied-intelligence-lab-automation',
    title: 'Embodied Intelligence for Laboratory Automation',
    category: 'publication',
    year: '2024',
    authors: 'Pavel Ni, A. Chen, M. Rivera',
    description:
      'A study on how embodied intelligence can improve automation workflows in laboratory environments.',
  },
  {
    id: 'multimodal-sensing-manipulation',
    slug: 'multimodal-sensing-manipulation',
    title: 'Multimodal Sensing for Dexterous Manipulation',
    category: 'publication',
    year: '2023',
    authors: 'Pavel Ni, J. Alvarez, S. Patel',
    description:
      'An overview of multimodal sensing approaches that support more robust robotic manipulation.',
  },
];

export const softwareItems: ContentItem[] = [
  {
    id: 'python',
    slug: 'python',
    title: 'Python',
    category: 'software',
    description: 'Core language for data analysis, prototyping, and automation.',
  },
  {
    id: 'pytorch',
    slug: 'pytorch',
    title: 'PyTorch',
    category: 'software',
    description: 'Deep learning framework for research and model development.',
  },
  {
    id: 'ros',
    slug: 'ros',
    title: 'ROS',
    category: 'software',
    description: 'Robotics middleware used for system integration and experimentation.',
  },
  {
    id: 'docker',
    slug: 'docker',
    title: 'Docker',
    category: 'software',
    description: 'Container tooling for reproducible development and deployment.',
  },
];

export function getItemBySlug(slug: string): ContentItem | undefined {
  return [...projects, ...publications, ...softwareItems].find((item) => item.slug === slug);
}
