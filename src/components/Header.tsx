import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary" elevation={4}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo or site title */}
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          Brandon Ma
        </Typography>

        {/* Navigation buttons or links */}
        <Box>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
          <Button
            color="inherit"
            href="/resume.pdf"
            download="resume.pdf"  // Optional: customize downloaded filename
            >
            Download Resume
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
