import { createTheme } from "@mui/material";

const theme = createTheme({
      
      typography: {
            fontFamily: [
                  'Sora', 'sans-serif',
            ].join(','),
            
            allVariants: {
                  color: '#3b3b3b'
            }
      },

      breakpoints: {
            values: {
                  xs: 375,
                  sm: 600,
                  md: 960,
                  lg: 1280,
                  xl: 1920,
            }
      },
});

export default theme;