import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Index() {
    return (
        <Container sx={{
            padding: 1,
            color: 'primary.main',
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
                    WebkitTextStrokeColor: 'black',
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