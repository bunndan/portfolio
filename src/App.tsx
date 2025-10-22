import React from 'react';
import Header from './components/Header';
import About from './components/About';
import WorkHistory from './components/WorkHistory';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechStack from './components/TechStack';  // Import TechStack

import { Container, Box, CssBaseline, Fade } from '@mui/material';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md" component="main" sx={{ mt: 4, mb: 8 }}>
        <Fade in={true} timeout={800} style={{ transitionDelay: '100ms' }}>
          <Box sx={{ mb: 6 }}>
            <About />
          </Box>
        </Fade>
        <Box sx={{ mb: 6 }}>
          <TechStack /> {/* Add TechStack here */}
        </Box>
        <Fade in={true} timeout={800} style={{ transitionDelay: '300ms' }}>
          <Box sx={{ mb: 6 }}>
            <WorkHistory />
          </Box>
        </Fade>
        <Fade in={true} timeout={800} style={{ transitionDelay: '500ms' }}>
          <Box sx={{ mb: 6 }}>
            <Projects />
          </Box>
        </Fade>
        <Fade in={true} timeout={800} style={{ transitionDelay: '700ms' }}>
          <Box sx={{ mb: 6 }}>
            <Contact />
          </Box>
        </Fade>
      </Container>
    </>
  );
};

export default App;

