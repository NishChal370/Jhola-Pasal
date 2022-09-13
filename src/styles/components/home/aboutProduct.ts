import { Avatar, Box, ListItemAvatar, Stack, styled } from "@mui/material";

export const AboutProductStack = styled(Stack)( ({theme})=>({
      alignItems:'center', 

      [theme.breakpoints.up(715)]:{
            flexDirection: 'row',
      },

      [theme.breakpoints.up('md')]:{
            gap: '6rem',
      },

}) )


export const ListImage = styled(ListItemAvatar)( ()=>({
      backgroundColor:'white',
      minWidth:'fit-content',
      paddingRight:'1rem',
}) )


export const Image = styled(Avatar)( ()=>({
      backgroundColor: 'white',
      width: '1.4rem',
}) )

export const MainImageBox = styled(Box)( ({theme})=>({
      width: '20rem',
      maxWidth: '24rem',
      alignSelf: 'center',

      [theme.breakpoints.up(715)]:{
            alignSelf: 'start',
            width: '48rem',  
      },
      
      [theme.breakpoints.up(789)]:{
            alignSelf: 'center',
            width: '60rem',  
      },

      [theme.breakpoints.up(820)]:{
            width: '86rem',
      },

      [theme.breakpoints.up('md')]:{
            width: '80rem',
            maxWidth: '80rem',
      },

      [theme.breakpoints.up('lg')]:{
            width: '60rem',
            maxWidth: '60rem',
      },

}) )