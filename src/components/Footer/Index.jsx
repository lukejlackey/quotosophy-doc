import React, { useContext } from 'react'
import { Box, Typography, Link } from '@mui/material'
import {LinkedIn, GitHub} from '@mui/icons-material';
import { default as MainContext } from "../../context/Index";

export default function Index() {

  const {drawerWidth} = useContext(MainContext);

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
    </Box>
  )
}
