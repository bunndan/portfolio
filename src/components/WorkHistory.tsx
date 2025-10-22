import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';

interface Job {
  company: string;
  position: string;
  startDate: string;  // e.g., "Jan 2020"
  endDate: string;    // e.g., "Dec 2022" or "Present"
  details: string[];
  logo: string; // filename for logo image
}

const jobs: Job[] = [
  {
    company: 'Tokyo Board of Education',
    position: 'High School Teacher',
    startDate: 'Mar 2018',
    endDate: 'Dec 2021',
    details: [
      'Designed interactive lessons on grammar, vocab, and communication.',
      'Supported Unity projects, including apps with Google Maps and data tools.',
      'Co-led Electronics Club, teaching Arduino robots and programming basics.'
    ],
    logo: '/boe.png'
  },
  {
    company: 'Another Company',
    position: 'Software Developer Intern',
    startDate: 'Jun 2017',
    endDate: 'Aug 2017',
    details: [
      'Assisted in developing internal tools with Python and Django.',
      'Improved code quality through unit tests and code reviews.',
    ],
    logo: '/boe.png'
  },
  // Add more jobs as needed
];

const WorkHistory: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h2" sx={{ mb: 4, fontWeight: 'bold' }}>
        Work History
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          px: 2, // horizontal padding
          maxWidth: 1200, // max container width
          mx: 'auto', // center horizontally
        }}
      >
        {jobs.map(({ company, position, startDate, endDate, details, logo }, index) => (
          <Card
            key={index}
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
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                {/* Add the company logo */}
                <img src={'/portfolio'+logo} alt="Company Logo" style={{ width: 40, height: 40, marginRight: 8 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {position} — {company}
                </Typography>
            </Box>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                {startDate} — {endDate}
            </Typography>
            <List dense>
                {details.map((detail, idx) => (
                <ListItem key={idx} sx={{ pl: 0 }}>
                    <ListItemText primary={`• ${detail}`} />
                </ListItem>
                ))}
            </List>
            </CardContent>

            {index < jobs.length - 1 && <Divider sx={{ mt: 2 }} />}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default WorkHistory;
