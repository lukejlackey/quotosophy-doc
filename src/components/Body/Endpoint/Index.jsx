import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import MainContext from "../../../context/Index";

export default function Index(props) {

    const { baseUrl } = useContext(MainContext);
    let { endpoint, desc, reqId } = props;
    endpoint = `/${endpoint}`;
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [id, setId] = useState(1);
    const [calls, setCalls] = useState(0);
    const callLimit = 10;

    const handleClick = async (e) => {
        if (calls > callLimit) {
            setResponse({ status: 429, statusText: 'Too many requests. Please try again later.' });
            setError(true);
            return
        }
        e.preventDefault();
        setResponse(null);
        setError(false);
        const route = baseUrl + endpoint + (reqId && id ? id : '');
        const method = 'GET'
        await fetch('http://localhost:8000/api/routes', {
            method,
            headers: {
                method,
                route,
            }
        })
            .then(res => {
                setResponse(res);
                return res.json();
            })
            .then(res => {
                console.log({ res });
                setResponse(res);
                setCalls(calls + 1)
            })
            .catch(err => {
                console.error(err);
                setError(true);
            });
    }

    return (
        <>
            <Card sx={{
                mx: 'auto',
                my: 1,
                padding: 1,
                display: 'flex',
                alignItems: 'space-between',
                bgcolor: 'white',
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '90%',
                }}>
                    <Chip label="GET" color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" color="secondary">
                        {endpoint}&nbsp;
                    </Typography>
                    {
                        reqId ?
                            <TextField label="id" size='small' variant="outlined" onChange={(e) => setId(e.target.value)} /> : ''
                    }
                </Box>
                <Button sx={{ width: '11%' }} variant="contained" color="primary" size="medium" onClick={handleClick}>
                    Try it!
                </Button>
            </Card>
            <Typography variant="body1" color="primary" sx={{ width: '90%', mx: 'auto' }}>
                {desc}
            </Typography>
            {
                response !== null ?
                    <Card sx={{ bgcolor: 'primary.dark', color: 'secondary.light', width: '90%', mx: 'auto', my: 1, padding: 1 }}>
                        <Typography variant="body1" sx={{
                            textAlign: 'left',
                            overflow: 'auto'
                        }}>
                            <pre>{
                                error ?
                                    `{ Error ${response.status}: ${response.statusText} }` :
                                    JSON.stringify(response.data, null, 2)
                            }</pre>
                        </Typography>
                    </Card> : ''
            }
        </>
    )
}
