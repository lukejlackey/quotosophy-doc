import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import Pages from './Pages/Index'
import Footer from './Footer/Index'
import MainContext from '../../context/Index'

export default function Index() {

    const { drawerWidth } = useContext(MainContext);

    return (
        <Box
            sx={{
                height: '100vh',
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                marginLeft: { sm: `${drawerWidth}px` },
            }}
        >
            <Pages />
            <Footer />
        </Box>
    )
}
