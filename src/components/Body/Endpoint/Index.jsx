import React, { useContext, useState } from 'react'
import MainContext from "../../../context/Index";
import EndpointContext from './context/Index';
import URLBox from './URLBox/Index';
import Description from './Description/Index';
import Response from './Response/Index';

export default function Index(props) {

    const { baseUrl } = useContext(MainContext);
    const contextVariables = useContext(EndpointContext);

    let { endpoint, desc, reqId } = props;
    endpoint = `/${endpoint}`;

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [id, setId] = useState(1);
    const [calls, setCalls] = useState(0);

    return (
        <EndpointContext.Provider
            value={{
                ...contextVariables,
                baseUrl,
                endpoint,
                desc,
                reqId,
                response,
                setResponse,
                error,
                setError,
                id,
                setId,
                calls,
                setCalls,
            }}
        >
            <URLBox />
            <Description />
            {
                response !== null ? <Response /> : ''
            }
        </EndpointContext.Provider>
    )
}
