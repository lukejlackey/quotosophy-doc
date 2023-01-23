import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import indigo from '@mui/material/colors/indigo';

export default function Index() {
    return (
        <Box sx={{
            width: .75,
            mx: 'auto',
            mb: 2,
            color: indigo[900],
        }}>
            <Typography variant="subtitle2">
                The <Box component='strong' sx={{ textDecoration: 'underline' }}>QUOTOSOPHY API</Box> provides lightning-fast access to a plethora of philosophical quotes, texts, and authors from throughout history. The following documentation details how to get started, as well as all available endpoints.
            </Typography>
        </Box>
    )
}
