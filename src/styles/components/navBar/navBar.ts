import { styled } from "@mui/system";
import { AppBar, Button, List, ListItemButton, Typography } from "@mui/material";


const NavContainer =  styled(AppBar)( ({theme})=>({
      backgroundColor: 'inherit',
      boxShadow: 'none',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '1.6rem 2rem 0rem 2rem',
      background: 'rgba(255, 255, 255, 0.767)',
      
      [theme.breakpoints.up('md')]:{
            padding: '1.6rem 4rem 0rem 4rem',
      },

      [theme.breakpoints.up('lg')]:{
            padding: '1.2rem 8rem 0rem 8rem',
      },
      
}) )


const AppName =  styled(Typography)( ()=>({
      color: 'black',
      fontSize:'1.4rem',
      alignSelf: 'center', 
      letterSpacing: '0.1em',
}) )


const NavList  = styled(List)( ({theme})=>({
      display: 'none',
      
      [theme.breakpoints.up('sm')]:{
            display: 'flex',
            justifyContent: 'end',
            gap: '2rem',
      },

}) )


const ItemButton = styled(ListItemButton)( ()=>({
      padding: '0rem',
      textAlign: 'center',

      '&:hover': {
            backgroundColor: 'inherit',
      },

}) )

const NavButtonList  = styled(List)( ({theme})=>({
      display: 'none',
      
      [theme.breakpoints.up('md')]:{
            display: 'flex',
            gap:'0.6rem',
      },

      [theme.breakpoints.up('lg')]:{
            gap:'1rem',
      },

}) )


const OfferButton = styled(Button)( ({theme})=>({
      color:'black',
      textTransform: 'none',
      letterSpacing: '0.1rem',
      borderRadius: '0px',
      fontSize:'1.1rem',

      [theme.breakpoints.up('md')]:{
            padding:'0.4rem 0.4rem',
      },

      [theme.breakpoints.up('lg')]:{
            padding:'0.4rem 1.2rem',
      },

}) )


const ShopButton = styled(Button)( ()=>({
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
}) )


export { NavContainer, AppName, NavList, ItemButton, NavButtonList, OfferButton, ShopButton }