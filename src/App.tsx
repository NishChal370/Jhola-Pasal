import { Box } from '@mui/material';
import { Home } from './pages';
import { NavBar } from './components';
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