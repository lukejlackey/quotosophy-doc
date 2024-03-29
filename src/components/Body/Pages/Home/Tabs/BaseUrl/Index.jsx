import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import MainContext from "../../../../../../context/Index";

export default function Index() {
    const { baseUrl } = useContext(MainContext)

    return (
        <>
            <Typography variant="h3" color="secondary">
                Base URL
            </Typography>
            <Card sx={{
                padding: 2,
                mx: 'auto',
                mt: 1,
                width: { xs: '90%', sm: '90%', md: '80%', lg: '75%', xl: '75%' },
            }}>
                <Typography variant="h6" color="primary">
                    {baseUrl}
                </Typography>
            </Card>
        </>
    )
}
