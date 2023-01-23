import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import indigo from '@mui/material/colors/indigo'
import EndpointContext from '../context/Index'

export default function Index() {

    const { error, response } = useContext(EndpointContext);

    return (
        <Card
            sx={{
                bgcolor: indigo[900],
                color: 'white',
                mx: 'auto',
                my: 1,
                padding: 1,
                width: { xs: '90%', sm: '90%', md: '80%', lg: '75%', xl: '75%' },
            }}
        >
            <Typography variant='subtitle1' fontWeight='bolder' color='primary.light'>RESPONSE:</Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'left',
                    overflow: 'auto',
                }}
            >
                <pre>{
                    error ?
                        `{ Error ${response.status ? response.status + ': ' + response.statusText : response} }` :
                        JSON.stringify(response.data, null, 2)
                }</pre>
            </Typography>
        </Card>
    )
}
