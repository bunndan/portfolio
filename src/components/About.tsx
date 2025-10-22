import React from 'react';
import { Box, Typography, Avatar, Paper } from '@mui/material';

const About: React.FC = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 5,
        borderRadius: 3,
        backgroundColor: 'background.paper',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4,
        }}
      >
        {/* <Avatar
          alt="Your Name"
          src="/path-to-your-photo.jpg"
          sx={{
            width: 96,
            height: 96,
            mr: 4,
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        /> */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            letterSpacing: 1,
          }}
        >
          About Me
        </Typography>
      </Box>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          lineHeight: 1.7,
          fontSize: '1.1rem',
          maxWidth: 700,
          letterSpacing: '0.02em',
        }}
      >
        Experienced software developer with a strong education background, seeking to refocus my career in tech and contribute effectively as a developer.
      </Typography>
    </Paper>
  );
};

export default About;
