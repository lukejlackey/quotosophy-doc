import React, { useContext } from 'react'
import Typography from '@mui/material/Typography'
import EndpointContext from '../context/Index'

export default function Index() {

    const { desc } = useContext(EndpointContext);

    return (
        <Typography
            variant="body1"
            color="primary"
            sx={{
                width: '90%', mx: 'auto'
            }}
        >
            {desc}
        </Typography>
    )
}
