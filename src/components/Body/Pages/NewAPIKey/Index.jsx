import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

export default function Index() {

    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    const cid = queryParams.get("cid");

    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const method = 'PUT'
        fetch('http://localhost:8000/api/key/reset', {
            method,
            headers: {
                method,
                headers: {
                    token,
                    cid,
                }
            },
        })
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                };
            })
            .catch(err => {
                console.error(err);
                setSuccess(false);
            })
    }, []);

    return (
        <Box sx={{
            mt: 3,
            py: 6,
            px: 3,
            bgcolor: 'primary.light',
            flexGrow: 1,
        }}>
            {
                success !== null ?
                    <Card sx={{
                        width: '75%',
                        bgcolor: 'secondary.light',
                        mx: 'auto',
                        textAlign: 'center',
                        my: 2,
                        padding: 2,
                    }}>
                        <Typography
                            variant="body1"
                            color="primary"
                            sx={{
                                width: '90%',
                                mx: 'auto',
                                mb: 3
                            }}
                        >
                            {
                                success ?
                                    "Success! Your new API key has been sent to your email. Please be sure to check your spam folders." :
                                    "Oh no! This link is either broken, has already been used, or has expired. Please return to our recovery page."
                            }
                        </Typography>
                        <Typography
                            variant="body1"
                            color="primary"
                            sx={{
                                width: '90%',
                                mx: 'auto',
                                mb: 3
                            }}
                        >
                            If you have any questions, please email <a href="mailto:support@quotosophy.com">support@quotosophy.com</a>
                        </Typography>
                    </Card> : ''
            }
        </Box>
    )
}
