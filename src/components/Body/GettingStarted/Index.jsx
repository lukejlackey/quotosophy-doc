import React from 'react'
import { Card, Link, Typography } from '@mui/material'

export default function Index() {
    return (
        <Card sx={{
            width: '75%',
            bgcolor: 'secondary.light',
            mx: 'auto',
            my: 2,
            padding: 2,
        }}>
            <Typography variant="h3" color="secondary">
                Getting Started
            </Typography>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                In order to access any endpoints, your request must include a 'X-API-KEY' header with a valid API key as the header value. Those without an active API key can click <Link href="#" underline="always" sx={{color: 'primary.dark', fontWeight: 'bolder'}}>here</Link> to subscribe to a plan that best matches their usage requirements.
            </Typography>
            <br/>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                Active subscribers can click <Link  href="#" underline="always" sx={{color: 'primary.dark', fontWeight: 'bolder'}}>here</Link> to manage their subscription or reset their API key if it has been forgotten/compromised.
            </Typography>
        </Card>
    )
}