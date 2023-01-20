import React from 'react'
import Typography from '@mui/material/Typography';
import Endpoint from "../../Endpoint/Index";

export default function Index() {
    return (
        <>
            <Typography variant="h3" color="secondary">
                Source Texts
            </Typography>
            <Typography variant="body1" color="primary" sx={{ width: '90%', mx: 'auto' }}>
                The following endpoints are available:
            </Typography>
            <Endpoint
                endpoint='sources/list'
                desc='Retrieves a paginated list of 10 source texts ordered by id. Page number can be specified with a "page" query parameter.'
            />
            <Endpoint
                endpoint='sources/random'
                desc='Retrieves a single, random source text. Includes the name of the author and all quotes from the text.'
            />
            <Endpoint
                reqId={true}
                endpoint='sources/'
                desc='Retrieves a single source with a specified id value. Includes the name of the author and all quotes from the text.'
            />
        </>
    )
}
