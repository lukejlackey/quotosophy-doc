import React, { useContext } from 'react'
import { Card, Container, Typography } from '@mui/material'
import { default as Endpoint } from "../Endpoint/Index";
import {default as MainContext} from '../../../context/Index'

export default function Index(props) {

    const { tabElements, setTabElements, scrollRef } = useContext(MainContext);

    return (
        <Card 
        ref={e => {
            let TECopy = tabElements;
            TECopy[props.refIndex] = e;
            setTabElements(TECopy);
            scrollRef.current[props.refIndex] = e;
        }}
        sx={{
            width: '75%',
            bgcolor: 'secondary.light',
            mx: 'auto',
            my: 2,
            padding: 2,
        }}>
            <Typography variant="h3" color="secondary">
                Authors
            </Typography>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                The following endpoints are available:
            </Typography>
            <Container>
                <Endpoint 
                    endpoint='authors/list' 
                    desc='Retrieves a paginated list of 10 authors ordered by id. Page number can be specified with a "page" query parameter.'
                />
            </Container>
            <Container>
                <Endpoint 
                    endpoint='authors/random' 
                    desc='Retrieves a single, random author. Includes all source texts and quotes written by the author.'
                />
            </Container>
            <Container>
                <Endpoint 
                    reqId={true}
                    endpoint='authors/' 
                    desc='Retrieves a single quote with a specified id value. Includes all source texts and quotes written by the author.'
                />
            </Container>
        </Card>
    )
}