import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import indigo from '@mui/material/colors/indigo';

export default function Index() {
    return (
        <Container sx={{
            padding: 1,
            color: indigo[900],
        }}>
            <Typography
                variant="h4"
            >
                Welcome to the
            </Typography>
            <Typography
                variant="h2"
                fontWeight='bolder'
                color='secondary.dark'
                sx={{
                    WebkitTextStrokeWidth: '1px',
                    WebkitTextStrokeColor: indigo[900],
                }}
            >
                QUOTOSOPHY <Box component='span' style={{ color: 'white' }}>API</Box>
            </Typography>
            <Typography
                variant="h3"
                fontWeight='bold'
            >
                Documentation
            </Typography>
        </Container>
    )
}