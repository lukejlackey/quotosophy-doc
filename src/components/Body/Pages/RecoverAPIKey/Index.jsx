import React from 'react'
import Box from '@mui/material/Box'
import Title from './Title/Index'
import EmailBox from './EmailBox/Index'

export default function Index() {

    return (
        <Box sx={{
            mt: 3,
            py: 6,
            px: 3,
            bgcolor: 'primary.light',
            flexGrow: 1,
        }}>
            <Title />
            <EmailBox />
        </Box>
    )
}
