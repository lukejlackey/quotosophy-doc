import React from 'react'
import Card from '@mui/material/Card'
import URL from "./URL/Index";
import TryItButton from "./TryItButton/Index";

export default function Index() {

    return (
        <Card sx={{
            mx: 'auto',
            my: 1,
            padding: 1,
            gap: 1,
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            bgcolor: 'white',
            width: { xs: '90%', sm: '90%', md: '80%', lg: '75%', xl: '75%' },
        }}>
            <URL />
            <TryItButton />
        </Card>
    )
}
