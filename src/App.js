import { Box, CssBaseline } from '@mui/material';
import { default as MainContext } from './context/Index';
import {default as NavBar} from './components/NavBar/Index'
import { default as Body } from './components/Body/Index';
import { default as PricingPage } from './components/PricingPage/Index';
import { default as APIKeyPage } from './components/APIKeyPage/Index';
import { default as ResetAPIKey } from './components/ResetAPIKey/Index';
import { default as Footer } from './components/Footer/Index';
import React, {useRef, useEffect, useState} from 'react';
import {
  Routes,
  Route,
  useMatch,
  useNavigate,
} from "react-router-dom";

function App() {
  
  const baseUrl = 'https://api.quotosophy.com'

  const navigate = useNavigate();
  const atHome = useMatch('/');

  const drawerWidth = 240;

  const links = [
    {
      name: 'Subscribe',
      link: '/subscribe',
    },
    {
      name: 'Manage Subscription',
      link: 'https://billing.stripe.com/p/login/test_5kAeYXdq37yCd3y6oo',
    },
    {
      name: 'Recover API Key',
      link: '/recover',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/lukejlackey',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/lukejlackey',
    },
  ]

  const tabs = ['Getting Started', 'Base URL', 'Quotes', 'Source Texts', 'Authors']
  const [tabElements, setTabElements] = useState([])

  const scrollRef = useRef([]);

  useEffect(() => {
    scrollRef.current = scrollRef.current.slice(0, tabElements.length);
  }, [tabElements])
  

  const scrollToItem = async (refIndex) => {
    if(!atHome) {
      setTabElements(tabElements);
      await navigate('/');
    }
    scrollRef.current[refIndex].scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  return (
    <>
      <CssBaseline />
      <Box sx={{textAlign: 'center', bgcolor: 'primary.main'}}>
        <MainContext.Provider
          value={{
            baseUrl,
            drawerWidth,
            links,
            socialLinks,
            tabs,
            tabElements,
            scrollRef,
            setTabElements,
            scrollToItem,
          }}
        >
          <Box sx={{display: 'flex'}}>
            <NavBar />
            <Box 
              sx={{
                height: '100vh',
                width:  { sm: `calc(100% - ${drawerWidth}px)` }
            }}>
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/subscribe" element={<PricingPage />} />
                <Route path="/recover" element={<APIKeyPage />}/>
                <Route path="/reset" element={<ResetAPIKey />}/>
              </Routes>
              <Footer/>
            </Box>
          </Box>
        </MainContext.Provider>
      </Box>
    </>
  );
}

export default App;
