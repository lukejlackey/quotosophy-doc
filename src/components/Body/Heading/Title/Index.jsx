import React from 'react'
import Typography from '@mui/material/Typography';
import { Container, Chip } from '@mui/material';
import { indigo } from '@mui/material/colors';



export default function Index() {
    return (
        <Container sx={{
            padding: 1
        }}>
            <Typography variant="h5"  color="primary">
                Welcome to the
            </Typography>
            <Typography variant="h2" color="secondary">
                QUOTOSOPHY API
                <Chip label="v.1.0" size="small" sx={{              
                    verticalAlign: 'top',
                    backgroundColor: indigo[900],
                    color: 'white',
                    fontWeight: 'bold'
                }}
                />
            </Typography>
            <Typography variant="h3" color="primary">
                Documentation
            </Typography>
        </Container>
    )
}