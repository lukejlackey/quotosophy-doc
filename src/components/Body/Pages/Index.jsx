import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Index'
import NewAPIKey from './NewAPIKey/Index'
import PricingPage from './PricingPage/Index'
import RecoverAPIKey from './RecoverAPIKey/Index'

export default function Index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reset" element={<NewAPIKey />} />
            <Route path="/subscribe" element={<PricingPage />} />
            <Route path="/recover" element={<RecoverAPIKey />} />
        </Routes>
    )
}
