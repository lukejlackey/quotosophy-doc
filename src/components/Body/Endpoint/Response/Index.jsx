import React, { useContext } from 'react'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import EndpointContext from '../context/Index'

export default function Index() {

    const { error, response } = useContext(EndpointContext);

    return (
        <Card
            sx={{
                bgcolor: 'primary.dark',
                color: 'secondary.light',
                mx: 'auto',
                my: 1,
                padding: 1,
                width: { xs: '90%', sm: '90%', md: '80%', lg: '75%', xl: '75%' },
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'left',
                    overflow: 'auto',
                }}
            >
                <pre>{
                    error ?
                        `{ Error ${response.status}: ${response.statusText} }` :
                        JSON.stringify(response.data, null, 2)
                }</pre>
            </Typography>
        </Card>
    )
}
