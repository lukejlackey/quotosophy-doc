import React from 'react'
import { Box, Typography, Link } from '@mui/material'
import {LinkedIn, GitHub} from '@mui/icons-material';

export default function Index() {

  return (
    <Box sx={{
      bgcolor: 'primary.main', 
      height: '10vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      color: 'white',
    }}>
      <Typography variant="body1">
        Made by Luke Lackey
      </Typography>
      <Link href="https://github.com/lukejlackey" target="_blank" color='secondary'>
        <GitHub/>
      </Link>
      <Link href="https://www.linkedin.com/in/lukejlackey/" target="_blank" color='secondary'>
        <LinkedIn/>
      </Link>      
      <Typography variant="body1">
        Questions? Email <Link color='inherit' href='mailto:support@quotosophy.com'>support@quotosophy.com</Link>
      </Typography>
    </Box>
  )
}
