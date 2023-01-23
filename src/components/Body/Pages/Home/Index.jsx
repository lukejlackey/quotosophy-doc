import React from 'react'
import Box from '@mui/material/Box';
import Heading from "./Heading/Index";
import Tabs from './Tabs/Index'

export default function Index() {

    return (
        <Box sx={{
            bgcolor: 'primary.light',
            py: 3,
            px: { xs: 0, sm: 1, md: 1, lg: 2, xl: 3 },
            flexGrow: 1,
            mt: 5,
        }}>
            <Heading />
            <Tabs />
        </Box>
    )
}
