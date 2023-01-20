import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import { default as MainContext } from "../../../../context/Index";

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
            }}>
                <Typography variant="h6" color="primary">
                    {baseUrl}
                </Typography>
            </Card>
        </>
    )
}
