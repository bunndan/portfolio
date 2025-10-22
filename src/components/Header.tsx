// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header
//         style={{
//             padding: '1rem',
//             backgroundColor: '#282c34',
//             color: 'white',
//             position: 'sticky',
//             top: 0,
//             zIndex: 1000,
//         }}
//     >
//         <h1>My Portfolio</h1>
//         <nav>
//             <a href="#about" style={{ margin: '0 1rem', color: 'white' }}>About</a>
//             <a href="#projects" style={{ margin: '0 1rem', color: 'white' }}>Projects</a>
//             <a href="#contact" style={{ margin: '0 1rem', color: 'white' }}>Contact</a>
//         </nav>
//     </header>
//   );
// };

// export default Header;


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
