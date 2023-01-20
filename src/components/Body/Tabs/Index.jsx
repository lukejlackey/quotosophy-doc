import React from 'react'
import GettingStarted from "./GettingStarted/Index";
import BaseUrl from "./BaseUrl/Index";
import Quotes from "./Quotes/Index";
import SourceTexts from "./SourceTexts/Index";
import Authors from "./Authors/Index";
import Tab from './Tab/Index'

export default function Index() {

    const tabs = [<GettingStarted />, <BaseUrl />, <Quotes />, <SourceTexts />, <Authors />]

    return (
        <>
            {
                tabs.map((tabComponent, i) => {
                    return <Tab
                        key={`tab${i}`}
                        refIndex={i}
                        component={tabComponent}
                    />
                })
            }
        </>
    )
}
