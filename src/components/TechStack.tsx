import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const TechStack: React.FC = () => {
  // Grouping the skills into categories
  const languages = [
    'Java', 'JavaScript', 'PHP', 'HTML', 'CSS', 'TypeScript', 'C#', 'AJAX'
  ];
  const technologies = [
    'MySQL', 'PostgreSQL', 'MongoDB', 'React.js', 'Angular', 'Node.js', 'jQuery',
    'Spring', 'Selenium', 'ExpressionEngine', 'Bootstrap', 'Grails framework'
  ];
  const tools = [
    'Git', 'GitHub', 'Mercurial', 'Docker', 'VS Code', 'Jira', 'Confluence', 'VirtualBox'
  ];
  const agileSkills = [
    'Scrum', 'Sprint Planning', 'Stand-ups', 'Sprint Retrospectives', 'Sprint Reviews', 
    'Backlog Grooming', 'Agile Estimation Techniques', 'User Stories', 'Agile Metrics and Reporting', 'CI/CD'
  ];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Technical Skills
      </Typography>

      {/* Languages */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Languages
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {languages.map((language, index) => (
          <Chip key={index} label={language} color="primary" sx={{ fontWeight: 'bold' }} />
        ))}
      </Box>

      {/* Technologies */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Technologies
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {technologies.map((tech, index) => (
          <Chip key={index} label={tech} color="primary" sx={{ fontWeight: 'bold' }} />
        ))}
      </Box>

      {/* Tools */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Tools
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {tools.map((tool, index) => (
          <Chip key={index} label={tool} color="primary" sx={{ fontWeight: 'bold' }} />
        ))}
      </Box>

      {/* Agile Skills */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Agile Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
        {agileSkills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" sx={{ fontWeight: 'bold' }} />
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
