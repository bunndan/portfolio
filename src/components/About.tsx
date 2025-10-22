// import React from 'react';

// const About: React.FC = () => {
//   return (
//     <section id="about" style={{ padding: '2rem' }}>
//       <h2>About Me</h2>
//       <p>
//         Experienced software developer with a strong education background, seeking to refocus my career in tech and contribute effectively as a developer.
//       </p>
//     </section>
//   );
// };

// export default About;

// import React from 'react';
// import { Box, Typography, Avatar, Paper } from '@mui/material';

// const About: React.FC = () => {
//   return (
//     <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//         {/* Optional: Your photo or avatar */}
//         <Avatar
//           alt="Your Name"
//           src="/path-to-your-photo.jpg" // Replace with your image path or remove if none
//           sx={{ width: 80, height: 80, mr: 3 }}
//         />
//         <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
//           About Me
//         </Typography>
//       </Box>
//       <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//         {/* Replace this text with your bio/introduction */}
//         I am a passionate full-stack developer with experience in React, TypeScript, and Material UI. 
//         I enjoy building user-friendly, performant web applications that solve real-world problems.
//       </Typography>
//     </Paper>
//   );
// };

// export default About;


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
        <Avatar
          alt="Your Name"
          src="/path-to-your-photo.jpg"
          sx={{
            width: 96,
            height: 96,
            mr: 4,
            border: '3px solid',
            borderColor: 'primary.main',
          }}
        />
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
        I am a passionate full-stack developer with experience in React, TypeScript, and Material UI. 
        I enjoy building user-friendly, performant web applications that solve real-world problems.
      </Typography>
    </Paper>
  );
};

export default About;
