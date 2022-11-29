import { Box, CssBaseline } from '@mui/material';
import { default as MainContext } from './context/Index';
import {default as NavBar} from './components/NavBar/Index'
import { default as Body } from './components/Body/Index';
import { default as Footer } from './components/Footer/Index';

function App() {
  
  const baseUrl = 'http://localhost:8080'
  const baseUrl2 = 'https://quotosophy.api'

  const drawerWidth = 240;

  return (
    <>
      <CssBaseline />
      <Box sx={{textAlign: 'center'}}>
        <MainContext.Provider
          value={{
            baseUrl,
            drawerWidth,
          }}
        >
          <Box sx={{display: 'flex'}}>
            <NavBar />
            <Box sx={{
                height: '100vh',
                width:  { sm: `calc(100% - ${drawerWidth}px)` }
            }}>
              <Body />
              <Footer/>
            </Box>
          </Box>
        </MainContext.Provider>
      </Box>
    </>
  );
}

export default App;
