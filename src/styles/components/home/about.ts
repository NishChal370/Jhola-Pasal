import { Box, Card, Stack, styled, Typography } from "@mui/material";

export const AboutStack = styled(Stack)( ({theme})=>({
      gap:'4rem',
      justifyContent:'center',
      alignItems: 'center',
      maxWidth:'fit-content',

      [theme.breakpoints.up('md')]:{
            flexDirection: 'row',
      },

      [theme.breakpoints.up('lg')]:{
            gap:'10rem',

      },

}) )


export const DetailStack = styled(Stack)( ({theme})=>({
      gap: '3rem',
}) )


export const AboutCard = styled(Card)( ({theme})=>({
      padding:'1rem', 
      maxWidth:'18rem',
      boxShadow: '0 0 10px rgb(0 0 0 / 8%)',
      display:'flex', 
      flexDirection:'column',
      alignSelf:'center',
      gap:'0.4rem',

      [theme.breakpoints.up('md')]:{
            width:'14rem',
      },

      [theme.breakpoints.up('lg')]:{
            width:'18rem',
      },

}) )


export const CardsContainer = styled(Stack)( ({theme})=>({
      gap: '2rem',
      justifyContent:'center',

      [theme.breakpoints.up('sm')]:{
            flexDirection:'row',
      },

}) )


export const Article = styled(Typography)( ()=>({
      color: 'black',
      fontSize: '1rem',
      lineHeight: '1.4rem',
}) )


export const CardTitle = styled(Typography)( ()=>({
      fontWeight: 'bold', 
      color: 'black', 
      fontSize: '1.2rem',
}) )


export const NumberTypography = styled(Typography)( ()=>({
      fontFamily:"'Raleway', sans-serif",
}) )


export const NumberTitle = styled(Typography)( ()=>({
      fontFamily:"'Raleway', sans-serif",
      fontSize:'1.6rem',
      fontWeight:'bold',
      color: '#090142',
}) )


export const CardImageContainer = styled(Box)( ({theme})=>({
      Width: '7rem',
      height: '7rem',
      margin: '0rem',
      padding: '0rem',

      [theme.breakpoints.up('md')]:{
            Width: '6rem',
            height: '6rem',
      },

      [theme.breakpoints.up('lg')]:{
            Width: '7rem',
            height: '7rem',
      },

}) )


export const CardImage = styled('img')( ()=>({
      width: '100%',
      height: '100%',
}) )