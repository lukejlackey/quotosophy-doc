import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Index() {
    return (
        <Box sx={{
            width: .75,
            mx: 'auto',
            mb: 2,
        }}>
            <Typography variant="subtitle2" color="primary.dark" >
                The <Box component='strong'>QUOTOSOPHY API</Box> provides lightning-fast access to a plethora of philosophical quotes, texts, and authors from throughout history. The following documentation details how to get started, as well as all available endpoints.
            </Typography>
        </Box>
    )
}
