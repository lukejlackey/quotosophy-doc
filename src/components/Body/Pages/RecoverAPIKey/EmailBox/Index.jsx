import React from 'react'
import Card from '@mui/material/Card'
import Description from './Description/Index'
import EmailForm from './EmailForm/Index'


export default function Index() {
    return (
        <Card sx={{
            width: '85%',
            bgcolor: 'secondary.light',
            mx: 'auto',
            my: 2,
            padding: 2,
        }}>
            <Description />
            <EmailForm />
        </Card>
    )
}
