import { Box, ImageList, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderStack = styled(Stack)( ({theme})=>({
      justifyContent: 'space-between',
      gap: '1',

      [theme.breakpoints.up('sm')]:{
            flexDirection: 'row-reverse',
      },
}) )


export const ArticleStack = styled(Stack)( ({theme})=>({
      gap: '1rem',

      [theme.breakpoints.up("sm")]:{
            width: '45rem',
            justifyContent: 'center',
            paddingTop: '2rem',
      },

      [theme.breakpoints.up('lg')]:{
            width: '44rem',
            gap: '2rem',


      }
}) )


export const HeaderTitle = styled(Typography)( ({theme})=>({
      fontWeight: '600',
      fontSize: '2.2rem',
      color: '#090142',
      letterSpacing: '0.1em',

      [theme.breakpoints.up('xs')]:{
            fontSize: '2.6rem',
      },

      [theme.breakpoints.up('sm')]:{
            fontSize: '2.8rem',
      },
      
      [theme.breakpoints.up('md')]:{
            fontSize: '3.6rem',
      },

      [theme.breakpoints.up('lg')]:{
            fontSize: '4.6rem',
            letterSpacing: '0.09em',
      },
}) )


export const HeaderSubTitle = styled(Typography)( ({theme})=>({
      fontSize: '1rem',
      textAlign: 'justify',
      lineHeight: '1.3rem',
      color:'#646363',

      [theme.breakpoints.up('lg')]:{
            fontSize: '1.2rem',
            lineHeight: '1.6rem',
      },
}) )


export const ClientsList = styled(ImageList)( ({theme})=>({
      margin:'0rem',
      display: 'flex',
      justifyContent:'space-between',
      width:'80%',

      [theme.breakpoints.up('sm')]:{
            width:'20rem',
      },

      [theme.breakpoints.up('lg')]:{
            width:'68%',
      },
}) )


export const ClientLogoImage = styled('img')( ({theme})=>({
      width:'4.2rem',
      height: '3rem',
      objectFit:'cover',
      
      [theme.breakpoints.up('lg')]:{
            width: '6rem',
            height: '3rem',
      },
}) )



export const ImageBoxContainer = styled(Box)( ({theme})=>({
      width: '100%',
      height: '30rem',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'relative',
      maxWidth:'26rem',
      alignSelf:'center',

      [theme.breakpoints.up('sm')]:{
            height: '35rem',
      },

      [theme.breakpoints.up('md')]:{
            maxWidth:'30rem',
            height: '46rem',
      },

      [theme.breakpoints.up('lg')]:{
            maxWidth:'36rem',
            height: '50rem',
      },
}) )


export const ImageBoxWrapper = styled(Box)( ()=>({
      width:'100%',
      height:'100%', 
      display:'flex',
      justifyContent:'center',
      overflow:'hidden',
      borderBottomLeftRadius:'46%',
      borderBottomRightRadius:'44%',
      
}) )


export const ModelImage = styled('img')( ()=>({
      width: '100%',
      height: '100%',
}) )

export const CircleBox = styled(Box)( ()=>({
      width: '90%',
      height: '66%',
      borderRadius: '50%',
      backgroundColor: '#a4d8a4d8',
      position: 'absolute',
      zIndex: '-1',
      bottom: '0',
}) )