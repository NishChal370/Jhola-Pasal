import { Box, Stack, styled } from "@mui/material";

export const SignUpStack = styled(Stack)( ()=>({
      alignSelf: 'center', 
      textAlign: 'center',
}) )

export const SignUpForm = styled(Box)( ({theme})=>({
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      maxWidth: '20rem', 
      alignSelf: 'center',

      [theme.breakpoints.up('sm')]:{
            maxWidth: '26rem', 
      }
}) )