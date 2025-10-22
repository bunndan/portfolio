// import React from 'react';
// import { projects } from '../data/projectsData';

// const Projects: React.FC = () => {
//   return (
//     <section id="projects" style={{ padding: '2rem' }}>
//       <h2>Projects</h2>
//       {projects.map((project, index) => (
//         <div key={index} style={{ marginBottom: '1.5rem' }}>
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
//           {project.link && (
//             <p>
//               <a href={project.link} target="_blank" rel="noopener noreferrer">
//                 View on GitHub
//               </a>
//             </p>
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Projects;


import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';

interface Project {
  id: number;
  title: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React, TypeScript, and Material-UI.',
    demoUrl: 'https://your-demo-url.com',
    repoUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    id: 2,
    title: 'Task Manager App',
    description: 'A productivity app for managing tasks and deadlines.',
    repoUrl: 'https://github.com/yourusername/task-manager',
  },
  // Add more projects here
];

const Projects: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
        Projects
      </Typography>

      <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 4,
            justifyContent: 'center',
            px: 2,       // horizontal padding
            maxWidth: 1200, // max container width
            mx: 'auto',  // center horizontally
        }}
        >

        {projects.map(({ id, title, description, demoUrl, repoUrl }) => (
          <Card
            key={id}
            elevation={3}
            sx={{
                width: { xs: '100%', sm: '70%', md: '45%' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                },
            }}
            >

            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
              {demoUrl && (
                <Button
                  size="small"
                  color="primary"
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
              {repoUrl && (
                <Button
                  size="small"
                  color="primary"
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source Code
                </Button>
              )}
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
