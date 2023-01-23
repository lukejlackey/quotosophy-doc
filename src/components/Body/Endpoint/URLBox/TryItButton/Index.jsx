import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import EndpointContext from '../../context/Index'

export default function Index() {

    const { calls, setCalls, callLimit, setResponse, setError, baseUrl, endpoint, reqId, id, } = useContext(EndpointContext);

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
                return res.json();
            })
            .then(res => {
                console.log({ res });
                setResponse(res);
                setCalls(calls + 1);
            })
            .catch(err => {
                console.error(err);
                setError(true);
            });
    }

    return (
        <Button
            sx={{
                width: { xs: '90%', sm: '90%', md: '20%', lg: '20%', xl: '15%' }
            }}
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleClick}
        >
            Try it!
        </Button>
    )
}
