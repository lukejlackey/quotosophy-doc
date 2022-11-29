import React, {useContext} from 'react'
import { default as Heading } from "./Heading/Index";
import { default as GettingStarted } from "./GettingStarted/Index";
import { default as BaseUrl } from "./BaseUrl/Index";
import { default as Quotes } from "./Quotes/Index";
import { default as SourceTexts } from "./SourceTexts/Index";
import { default as Authors } from "./Authors/Index";
import { Box } from '@mui/material';
import { default as MainContext } from "../../context/Index";

export default function Index() {

    const {drawerWidth} = useContext(MainContext)

    return (
        <Box sx={{
            bgcolor: 'primary.light',
            py: 3,
            px: {xs: 0, sm: 1, md: 1, lg: 2, xl: 3},
            flexGrow: 1,
            mt: 5,
        }}>
            <Heading/>
            <GettingStarted />
            <BaseUrl />
            <Quotes />
            <SourceTexts />
            <Authors />
        </Box>
    )
}