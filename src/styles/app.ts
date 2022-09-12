import { Button, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";


export const Main = styled(Container)( ({theme})=>({
      maxWidth: '34rem',
      marginTop: '4rem',
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',

      [theme.breakpoints.up('sm')]:{
            maxWidth: '100%',
            marginTop: '6rem',
      },
      
      [theme.breakpoints.up('md')]:{
            maxWidth: '70rem',
      },

      [theme.breakpoints.up('lg')]:{
            maxWidth: '94rem',
      },
      
}) )


export const GreenButton = styled(Button)( ({theme})=>({
      color: 'white',
      backgroundColor: '#014145',
      borderRadius: '0px',
      padding:'0.7rem 1.2rem',
      width:'fit-content',
      textTransform: 'none',

      '&:hover': {
            color: 'white',
            backgroundColor: '#014145',
      },

      [theme.breakpoints.up('lg')]:{
            fontSize: '1.1rem',
      },

}) )


export const Title = styled(Typography)( ({theme})=>({
      fontFamily: `'Raleway', 'sans-serif'`,
      fontSize: '2.4rem',
      fontWeight: '600',
      color: 'black',

      [theme.breakpoints.up('lg')]:{
            fontSize: '2.8rem',
      },

}) )

export const SubTitle = styled(Typography)( ({theme})=>({
      fontSize: '1rem',

      [theme.breakpoints.up('lg')]:{
            fontSize: '1.2rem',
      }

}) )
