import React from 'react'
import { Card, Typography } from '@mui/material';
import { useContext } from 'react';
import { default as MainContext } from "../../../context/Index";

export default function Index() {
    const { baseUrl } = useContext(MainContext);
    return (
        <Card sx={{
            width: '75%',
            bgcolor: 'secondary.light',
            mx: 'auto',
            my: 2,
            padding: 2,
        }}>
            <Typography variant="h3" color="secondary">
                Base URL
            </Typography>
            <Card sx={{
                padding: 2,
                mx: 'auto',
                width: '75%',
            }}>
                <Typography variant="h6" color="primary">
                    { baseUrl }
                </Typography>
            </Card>
        </Card>
    )
}
