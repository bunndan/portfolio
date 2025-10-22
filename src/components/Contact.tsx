import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact: React.FC = () => {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        mt: 6,
        maxWidth: 600,
        mx: 'auto',
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
        Contact Me
      </Typography>

      <Stack
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{ fontSize: 18 }}
      >
        <Link
          href="https://www.linkedin.com/in/brandonyma/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <LinkedInIcon /> LinkedIn
        </Link>

        <Link
          href="https://github.com/bunndan/"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <GitHubIcon /> GitHub
        </Link>
      </Stack>
    </Box>
  );
};

export default Contact;
