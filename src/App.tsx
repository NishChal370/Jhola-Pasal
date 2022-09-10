import { Box } from '@mui/material';
import { NavBar } from './components';
import { Home } from './pages';
import { Main } from './styles/app';



function App() {

      return (
            <Box className='App'>
                  <NavBar/>
                 
                  <Main maxWidth={false}>
                        <Home/>

                  </Main>
            </Box>
      )
}

export default App