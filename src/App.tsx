import { Box } from '@mui/material';
import { Home } from './pages';
import { Footer, NavBar } from './components';
import { Main } from './styles/app';



function App() {

      return (
            <Box className='App'>
                  <NavBar/>
                 
                  <Main maxWidth={false}>
                        <Home/>

                  </Main>

                  <Footer/>
            </Box>
      )
}

export default App