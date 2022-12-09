import React, { useState } from 'react'
import { Box, Card, FormControl, Typography, InputLabel, Input, FormHelperText } from '@mui/material'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Index() {

    const [emailInput, setEmailInput] = useState(null);
    const [recovered, setRecovered] = useState(null);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!(/\S+@\S+\.\S+/.test(emailInput))) {
            setRecovered(false);
        }else {
            const method = 'GET'
            await fetch('http://localhost:8000/api/key/recover', {
                method,
                headers: {
                    method,
                    email: emailInput
                },
            })
                .then(res => {
                    console.log(res);
                    if(res.status === 200) {
                        setRecovered(true);
                    } else {
                        setRecovered(false);
                    };
                })
                .catch(err => {
                    console.error(err);
                    setRecovered(false);
                })
        }
    }

    return (
        <Box sx={{
            mt: 3,
            py: 6, 
            px: 3, 
            bgcolor: 'primary.light', 
            flexGrow: 1,
        }}>
            <Typography variant='h1' color={'primary.main'} component={'em'}>
                Recovering <Box component={'span'} sx={{color: 'secondary.dark'}}>API Keys</Box>
            </Typography>
            <Card sx={{
                width: '75%',
                bgcolor: 'secondary.light',
                mx: 'auto',
                my: 2,
                padding: 2,
            }}>
                <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto', mb: 3}}>
                    Please provide your email below. You will receive an email with a link to reset your API key.
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl color="secondary" focused required sx={{width: '50%'}}>
                        <InputLabel htmlFor="email" >Email address</InputLabel>       
                        <Input id="email" aria-describedby="recovery" onChange={(e) => setEmailInput(e.target.value)}/>
                        {
                            recovered !== null?
                            <FormHelperText sx={{width: '90%', mx: 'auto', textAlign: 'center', color: recovered? 'green': 'red'}}>
                                {
                                    recovered?
                                    'Success! Please check your inbox for the link to reset your API key.':
                                    'Something went wrong. Please ensure you have entered the correct email and try again.'
                                }
                            </FormHelperText>:''
                        }
                        <Button type='submit' variant="contained" endIcon={<SendIcon />} sx={{width: '50%', mx: 'auto', mt: 3}}>
                            Send
                        </Button>
                    </FormControl>
                </form>
            </Card>
        </Box>
    )
}
