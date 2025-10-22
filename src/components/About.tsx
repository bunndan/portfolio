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
        id="about"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 4,
        }}
      >
        {<Avatar
          alt="Brandon Ma"
          src="/portfolio/photo.jpg"
          sx={{
            width: 96,
            height: 96,
            mr: 4,
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        />}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'text.primary',
            letterSpacing: 1,
          }}
        >
          It's me, Brandon!
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
        Hey there! I’m a software developer with 7 years of experience in the tech world, and I specialize in full-stack engineering. Over the years, I’ve built a wide range of skills, working with technologies like Java, JavaScript, React, TypeScript, and more.
        <br /><br />
        Along the way, I had the amazing opportunity to teach abroad, where I designed interactive lessons and helped students with projects using tools like Unity and Arduino. That experience really sharpened my communication skills, taught me how to collaborate with diverse teams, and gave me a fresh perspective on tackling challenges, skills that are super helpful in software development.
        <br /><br />
        These days, I’m diving deeper into full-stack engineering, combining my technical know-how with my love for creating intuitive, user-friendly applications. I’m always excited to learn new things and build solutions that make a difference!
      </Typography>
    </Paper>
  );
};

export default About;
