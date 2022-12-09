import React, { useContext } from 'react';
import { Card, Container, Typography } from '@mui/material';
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
                Quotes
            </Typography>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                The following endpoints are available:
            </Typography>
            <Container>
                <Endpoint 
                    endpoint='quotes/list' 
                    desc='Retrieves a paginated list of 10 quotes ordered by id. Page number can be specified with a "page" query parameter.'
                />
            </Container>
            <Container>
                <Endpoint 
                    endpoint='quotes/random' 
                    desc='Retrieves a single, random quote. Includes the title of the source text and the name of the author.'
                />
            </Container>
            <Container>
                <Endpoint 
                    reqId={true}
                    endpoint='quotes/' 
                    desc='Retrieves a single quote with a specified id value. Includes the title of the source text and the name of the author.'
                />
            </Container>
        </Card>
    )
}
