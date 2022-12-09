import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Card, Typography } from '@mui/material';
import {default as MainContext} from '../../../context/Index';

export default function Index(props) {

    const { tabElements, setTabElements, scrollRef, links } = useContext(MainContext);

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
                Getting Started
            </Typography>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                In order to access any endpoints, your request must include a 'X-API-KEY' header with a valid API key as the header value. Those without an active API key can click <Typography component={Link} to={'/subscribe'} sx={{color: 'primary.dark', fontWeight: 'bolder', textDecoration: 'underline'}}>here</Typography> to subscribe to a plan that best matches their usage requirements.
            </Typography>
            <br/>
            <Typography variant="body1" color="primary" sx={{width: '90%', mx: 'auto'}}>
                Active subscribers can click <Typography component={'a'} href={links[1].link} sx={{color: 'primary.dark', fontWeight: 'bolder', textDecoration: 'underline'}}>here</Typography> to manage their subscription or <Typography component={Link} to={'/recover'} sx={{color: 'primary.dark', fontWeight: 'bolder', textDecoration: 'underline'}}>here</Typography> to reset their API key if it has been forgotten/compromised.
            </Typography>
        </Card>
    )
}