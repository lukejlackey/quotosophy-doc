import React, { useContext } from 'react'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import indigo from '@mui/material/colors/indigo';
import EndpointContext from '../../context/Index'

export default function Index() {

    const { endpoint, reqId, setId } = useContext(EndpointContext);

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            width: '90%',
        }}>
            <Chip
                label="GET"
                sx={{
                    mr: 1,
                    color: 'white',
                    backgroundColor: indigo[900]
                }}
            />
            <Typography
                variant="h6"
                color="secondary">
                {endpoint}&nbsp;
            </Typography>
            {
                reqId ?
                    <TextField
                        label="id"
                        size='small'
                        variant="outlined"
                        sx={{
                            maxWidth: '25vw'
                        }}
                        onChange={(e) => setId(e.target.value)}
                    />
                    : ''
            }
        </Box>
    )
}
