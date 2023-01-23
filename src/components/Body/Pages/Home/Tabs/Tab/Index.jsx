import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import MainContext from "../../../../../../context/Index";

export default function Index(props) {

    const { tabElements, setTabElements, scrollRef } = useContext(MainContext);
    const { component } = props;

    return (
        <Card
            ref={e => {
                let TECopy = tabElements;
                TECopy[props.refIndex] = e;
                setTabElements(TECopy);
                scrollRef.current[props.refIndex] = e;
            }}
            sx={{
                width: '85%',
                bgcolor: 'secondary.light',
                mx: 'auto',
                my: 2,
                padding: 2,
            }}>
            {component}
        </Card>
    )
}