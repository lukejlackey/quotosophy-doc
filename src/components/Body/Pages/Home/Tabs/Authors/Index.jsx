import React from 'react'
import Typography from '@mui/material/Typography'
import Endpoint from "../../Endpoint/Index";

export default function Index() {

    return (
        <>
            <Typography variant="h3" color="secondary">
                Authors
            </Typography>
            <Typography variant="body1" color="primary" sx={{ width: '90%', mx: 'auto' }}>
                The following endpoints are available:
            </Typography>
            <Endpoint
                endpoint='authors/list'
                desc='Retrieves a paginated list of 10 authors ordered by id. Page number can be specified with a "page" query parameter.'
            />
            <Endpoint
                endpoint='authors/random'
                desc='Retrieves a single, random author. Includes all source texts and quotes written by the author.'
            />
            <Endpoint
                reqId={true}
                endpoint='authors/'
                desc='Retrieves a single quote with a specified id value. Includes all source texts and quotes written by the author.'
            />
        </>
    )
}