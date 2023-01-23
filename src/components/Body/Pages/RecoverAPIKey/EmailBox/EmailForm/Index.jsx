import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import SendIcon from '@mui/icons-material/Send';

export default function Index() {

    const [emailInput, setEmailInput] = useState(null);
    const [recovered, setRecovered] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!(/\S+@\S+\.\S+/.test(emailInput))) {
            setRecovered(false);
        } else {
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
                    if (res.status === 200) {
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
        <form onSubmit={handleSubmit}>
            <FormControl
                focused
                required
                color="secondary"
                sx={{
                    width: { xs: '90%', sm: '90%', md: '80%', lg: '75%', xl: '75%' },
                }}
            >
                <InputLabel htmlFor="email">
                    Email address
                </InputLabel>
                <Input
                    id="email"
                    aria-describedby="recovery"
                    onChange={(e) => setEmailInput(e.target.value)}
                />
                {
                    recovered !== null ?
                        <FormHelperText
                            sx={{
                                width: '90%',
                                mx: 'auto',
                                textAlign: 'center',
                                color: recovered ? 'green' : 'red'
                            }}
                        >
                            {
                                recovered ?
                                    'Success! Please check your inbox for the link to reset your API key.' :
                                    'Something went wrong. Please ensure you have entered the correct email and try again.'
                            }
                        </FormHelperText> : ''
                }
                <Button
                    type='submit'
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                        width: '50%',
                        mx: 'auto',
                        mt: 3
                    }}
                >
                    Send
                </Button>
            </FormControl>
        </form>
    )
}
