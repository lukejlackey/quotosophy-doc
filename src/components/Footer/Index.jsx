import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import { LinkedIn, GitHub } from '@mui/icons-material';

export default function Index() {

  return (
    <Box sx={{
      bgcolor: 'primary.main',
      minHeight: '10vh',
      p: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1,
      color: 'primary.light',
      flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row', },
    }}>
      <Typography variant="body1">
        Made by Luke Lackey
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link
          href="https://github.com/lukejlackey"
          target="_blank"
          color='primary.light'
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lukejlackey/"
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <LinkedIn />
        </Link>
      </Box>
      <Typography variant="body1">
        Questions? Email <Link
          href='mailto:support@quotosophy.com'
          sx={{
            color: 'white',
          }}
        >
          support@quotosophy.com
        </Link>
      </Typography>
    </Box>
  )
}
