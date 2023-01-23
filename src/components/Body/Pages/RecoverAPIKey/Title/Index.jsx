import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function Index() {
    return (
        <Typography
            variant='h1'
            color='primary.main'
            component='em'
            maxWidth={'90vw'}
        >
            Recovering <Box
                component={'span'}
                sx={{
                    color: 'secondary.dark'
                }}
            >
                API Keys
            </Box>
        </Typography>
    )
}
