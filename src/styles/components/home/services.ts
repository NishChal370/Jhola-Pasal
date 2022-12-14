import { Button, Card, CardContent, Grid, Stack, styled, Typography } from "@mui/material";


export const ServicesStack = styled(Stack)( ()=>({
      textAlign: 'center',

}) )

export const TitleStackContainer = styled(Stack)( ({theme})=>({
      maxWidth: '50rem',
      alignSelf: 'center',

      [theme.breakpoints.up('lg')]:{
            maxWidth: '60rem',
      }

}) )


export const ServiceContainer = styled(Grid)( ()=>({
      rowGap: '2rem',
      columnGap: '2rem',
      justifyContent: 'center',
      alignItems: 'center',
}) )


export const ServiceCardContainer = styled(Card)( ()=>({
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      maxWidth: '22rem',
      boxShadow: 'none',
      cursor: 'pointer',
      paddingTop: '1rem',

      '&:hover': {
            boxShadow: '0 0 10px #ece9e9',
      },

}) )


export const CardTitle = styled(Typography)( ()=>({
      fontSize: '1.4rem', 
      fontWeight: 'bold', 
      color: 'black'
}) )


export const CardArticle = styled(CardContent)( ()=>({
      display: 'flex', 
      flexDirection: 'column', 
      gap: '1rem'
}) )


export const ViewButton = styled(Button)( ()=>({
      color: 'black',
}) )