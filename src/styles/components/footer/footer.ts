import { Box, ImageListItem, List, Stack, styled, Typography } from "@mui/material";


export const FooterContainer = styled(Box)( ()=>({
      backgroundColor: '#bcf5bc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom: '4rem',
}) )

export const FooterWrapper = styled(Stack)( ({theme})=>({
      width: '90%',
      paddingTop: '1rem',
      maxWidth:'90rem',

      [theme.breakpoints.up('md')]:{
            flexDirection:'row',
            justifyContent: 'space-evenly',            
      },

      [theme.breakpoints.up('lg')]:{
            gap:'10rem',            
      },

      [theme.breakpoints.up('xl')]:{
            gap:'20rem',            
      },

}) )


export const ArticleStack = styled(Stack)( ()=>({ 
      width: '100%',
      maxWidth: '24rem',
      justifyContent:'center',
}) )

export const MainTitle = styled(Typography)( ()=>({
      fontWeight: 'bold',
      fontSize: '1.6rem',
}) )


export const ListContainer = styled(Stack)( ({theme})=>({
      flexDirection: 'row',
      width: '100%',
      marginTop:'0rem',
      justifyContent: 'space-evenly ',
}) )


export const ListWrapper = styled(List)( ()=>({
      padding: '1rem', 
      alignSelf: 'start',
}) )


export const ListText = styled(Typography)( ({theme})=>({

      [theme.breakpoints.up('md')]:{
            fontSize:'1.2rem',
      },

}) )

export const ImageContainer = styled(ImageListItem)( ()=>({
      width: '1.4rem',
      height: '100%',
}) )

export const Image = styled('img')( ()=>({
      width: '100%',
      height: '100%',
      objectFit: 'cover',
}) )