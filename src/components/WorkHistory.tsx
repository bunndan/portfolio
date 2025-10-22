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
    startDate: 'Nov 2021',
    endDate: 'Aug 2024',
    details: [
      'Designed interactive lessons on grammar, vocab, and communication.',
      'Supported Unity projects, including apps with Google Maps and data tools.',
      'Co-led Electronics Club, teaching Arduino robots and programming basics.'
    ],
    logo: '/tokyoboe.jpg'
  },
  {
    company: 'Paymentus',
    position: 'Full Stack Engineer',
    startDate: 'Apr 2019',
    endDate: 'Nov 2021',
    details: [
      'Collaborated on SAAS billing features, aligning with market and customer needs.',
      'Integrated 3+ POS devices annually, ensuring seamless web app communication.',
      'Developed NodeJS microservices for payment data processing, improving speed.',
    ],
    logo: '/paymentus.jpg'
  },
  {
    company: 'Precima',
    position: 'Full Stack Developer',
    startDate: 'Oct 2016',
    endDate: 'Apr 2019',
    details: [
      'Led development of a user management tool, reducing task time from days to hours.',
      'Integrated a user support system, syncing with training docs to improve access.',
      'Mentored Precima’s co-op initiative, guiding onboarding, reviews, and events.',
    ],
    logo: '/precima.jpg'
  },
  {
    company: 'Mount Sinai Hospital ',
    position: 'Research and Development Developer (Co-op)',
    startDate: 'May 2014',
    endDate: 'Aug 2014',
    details: [
      'Built a PHR app, enabling patients to securely manage their health data.',
      'Researched architectures and collaborated to enhance functionality and design.',
    ],
    logo: '/mountsinai.jpg'
  },
  {
    company: 'Pitney Bowes',
    position: 'Security Developer (Co-op)',
    startDate: 'Aug 2013',
    endDate: 'Dec 2013',
    details: [
      'Designed a browser extension to encrypt web request data using PIR.',
      'Developed Android apps with cryptography protocols for secure data exchange.',
      'Wrote proposals and detailed documentation for project development and testing.',
    ],
    logo: '/pitneybowes.jpg'
  },
  {
    company: 'N-Dimension Solutions',
    position: 'Cybersecurity Developer (Co-op)',
    startDate: 'Jan 2013',
    endDate: 'Apr 2013',
    details: [
      'Developed an automation system for regression testing of security software in Java.',
      'Created test cases for data transmission using packet analyzers in Linux.',
      'Gained expertise in Selenium IDE for testing web and SSH network protocols.',
    ],
    logo: '/ndimension.jpg'
  },
  {
    company: 'Massive Damage Inc.',
    position: 'PHP Web Developer (Co-op)',
    startDate: 'May 2012',
    endDate: 'Aug 2012',
    details: [
      'Developed an admin tool for analyzing player data and fixing corrupted data.',
      'Integrated Google Maps API for interactive data display within admin tools.',
      'Created customizable profile pages with social media integration.',
    ],
    logo: '/massivedamage.jpg'
  },
  {
    company: 'Trend Hunter',
    position: 'Web Developer (Co-op)',
    startDate: 'Jan 2011',
    endDate: 'Dec 2011',
    details: [
      'Developed a custom platform for corporate clients using PHP, HTML, jQuery, and ExpressionEngine CMS.',
      'Built a fast-loading image carousel using AJAX and jQuery under tight deadlines.',
      'Designed a metrics system to analyze and track user-submitted content.',
    ],
    logo: '/trendhunter.jpg'
  },
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
