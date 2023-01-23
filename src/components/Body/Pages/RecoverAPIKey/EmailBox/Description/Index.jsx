import React from 'react'
import Typography from '@mui/material/Typography'

export default function Index() {
    return (
        <Typography
            variant="body1"
            color="primary"
            sx={{
                width: '90%', mx: 'auto', mb: 3
            }}
        >
            Please provide your email below. You will receive an email with a link to reset your API key.
        </Typography>
    )
}
