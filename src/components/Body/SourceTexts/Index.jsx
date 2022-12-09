import React, { useContext } from 'react'
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
                Source Texts
            </Typography>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                The following endpoints are available:
            </Typography>
            <Container>
                <Endpoint 
                    endpoint='sources/list' 
                    desc='Retrieves a paginated list of 10 source texts ordered by id. Page number can be specified with a "page" query parameter.'
                />
            </Container>
            <Container>
                <Endpoint 
                    endpoint='sources/random' 
                    desc='Retrieves a single, random source text. Includes the name of the author and all quotes from the text.'
                />
            </Container>
            <Container>
                <Endpoint 
                    reqId={true}
                    endpoint='sources/' 
                    desc='Retrieves a single source with a specified id value. Includes the name of the author and all quotes from the text.'
                />
            </Container>
        </Card>
    )
}
