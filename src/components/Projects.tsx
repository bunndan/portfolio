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
  date: string;
  description: string;
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;  // Added image URL for each project
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Doki Jam! 2025',
    date: 'Aug 2025',
    description:
      'Developed and deployed Doki Dash solo using GameMaker Studio, handling coding, artwork, sound design, and game mechanics. Demonstrated problem-solving, rapid prototyping, and clean coding under tight deadlines, showcasing versatility and strong work ethic in both technical and creative tasks.',
    demoUrl: 'https://bunndan.itch.io/dokidash',
    imageUrl: '/portfolio/dokidash.png', // Example image
  },
  // Add other projects here
];

const Projects: React.FC = () => {
  return (
    <Box id="projects">
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
        Projects
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          justifyContent: 'center',
          px: 2,       // horizontal padding
          maxWidth: 1200, // max container width
          mx: 'auto',  // center horizontally
        }}
      >
        {projects.map(({ id, title, date, description, demoUrl, repoUrl, imageUrl }) => (
          <Card
            key={id}
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Switch to row on larger screens
              width: '100%',  // Make card full width
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.03)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
              },
            }}
          >
            {/* Left side: Text content */}
            <Box sx={{ flex: 1, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {title}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                  {date}
                </Typography>
                <Typography variant="body2" color="text.primary">
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
            </Box>

            {/* Right side: Image */}
            {imageUrl && (
  <Box
    sx={{
      width: { xs: '100%', md: '40%' }, // Full width on small screens, 40% on medium and up
      height: 'auto',
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px', // Optional: rounds the corners
      border: '2px solid #e0e0e0', // Optional: adds a light border around the image
      margin: 2, // Adds margin around the image for spacing
    }}
  />
)}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
