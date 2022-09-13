import { Card, CardContent, Stack, styled, Typography } from "@mui/material";

export const DealStack = styled(Stack)( ()=>({
      textAlign: 'center',
      alignItems: 'center',
}) )


export const TitleStackContainer = styled(Stack)( ({theme})=>({
      maxWidth: '30rem',
      alignSelf: 'center',

      [theme.breakpoints.up('lg')]:{
            maxWidth: '40rem',
      },

}) )


export const CardsContainer = styled(Stack)( ({theme})=>({
      gap: '2rem',

      [theme.breakpoints.up('md')]:{
            flexDirection: 'row',
      },
      
      [theme.breakpoints.up('lg')]:{
            gap: '6rem',
      },

}) )


export const CardContainer = styled(Card)( ({theme})=>({
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'center',
      textAlign: 'left',
      alignItems: 'center',
      maxWidth: '24rem',
      alignSelf: 'center',
      cursor: 'pointer',
      paddingLeft:'1rem',
      paddingRight:'1rem',

      '&:hover': {
            boxShadow: '0 0 10px #ece9e9',
      },

      [theme.breakpoints.up('sm')]:{
            maxWidth: '54rem',
            flexDirection:'row',
      },

      [theme.breakpoints.up('md')]:{
            maxWidth: '40rem',
            flexDirection:'column-reverse',
      },

      [theme.breakpoints.up('lg')]:{
            flexDirection:'row',
      },
}) )


export const Article = styled(CardContent)( ({theme})=>({
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      paddingRight:'0rem',
}) )


export const CardTitle = styled(Typography)( ()=>({
      fontWeight: 'bold',
      color: 'black',
      fontSize: '1.6rem',
}) )