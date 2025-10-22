export interface Project {
  title: string;
  description: string;
  techStack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Typescript.',
    techStack: ['React', 'Typescript', 'CSS'],
    link: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack task management tool with a React frontend and Spring Boot backend.',
    techStack: ['React', 'Spring Boot', 'Java', 'MySQL'],
  },
];
