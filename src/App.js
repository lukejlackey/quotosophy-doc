import { Box, CssBaseline } from '@mui/material';
import MainContext from './context/Index';
import NavBar from './components/NavBar/Index'
import Body from './components/Body/Index';
import PricingPage from './components/PricingPage/Index';
import APIKeyPage from './components/APIKeyPage/Index';
import ResetAPIKey from './components/ResetAPIKey/Index';
import Footer from './components/Footer/Index';
import React, { useState, useRef, useEffect, useContext } from 'react';
import {
  Routes,
  Route,
  useMatch,
  useNavigate,
} from "react-router-dom";

function App() {

  const context = useContext(MainContext);

  const navigate = useNavigate();

  const atHome = useMatch('/');

  const [tabElements, setTabElements] = useState([]);

  const scrollRef = useRef([]);

  useEffect(() => {
    scrollRef.current = scrollRef.current.slice(0, tabElements.length);
  }, [tabElements])

  const scrollToItem = async (refIndex) => {
    if (!atHome) {
      setTabElements(tabElements);
      await navigate('/');
    }
    scrollRef.current[refIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  return (
    <>
      <CssBaseline />
      <Box
        sx={{ textAlign: 'center', bgcolor: 'primary.main' }}
      >
        <MainContext.Provider
          value={{
            ...context,
            scrollRef,
            tabElements,
            setTabElements,
            scrollToItem,
          }}
        >
          <Box>
            <NavBar />
            <Box
              sx={{
                height: '100vh',
                width: { sm: `calc(100% - ${context.drawerWidth}px)` },
                marginLeft: { sm: `${context.drawerWidth}px` },
              }}>
              <Routes>
                <Route path="/" element={<Body />} />
                <Route path="/subscribe" element={<PricingPage />} />
                <Route path="/recover" element={<APIKeyPage />} />
                <Route path="/reset" element={<ResetAPIKey />} />
              </Routes>
              <Footer />
            </Box>
          </Box>
        </MainContext.Provider>
      </Box>
    </>
  );
}

export default App;
