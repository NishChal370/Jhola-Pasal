import { Card, List, ListItem, Stack, styled, Typography } from "@mui/material";


export const TestimonialsStack = styled(Stack)( ()=>({
      alignItems: 'center',
}) )


export const CardContainer = styled(Card)( ()=>({
      padding: '1rem',
      boxShadow: 'none',
      maxWidth: '24rem',
      textAlign: 'left',
      cursor: 'pointer',
      
      '&:hover': {
            boxShadow: '0 0 10px #ece9e9',
      },
}) )


export const User = styled(List)( ()=>({ 
      width: '100%', 
      maxWidth: 360, 
      paddingBottom: '0px',
}) )


export const UserWrapper = styled(ListItem)( ()=>({
      paddingBottom: '0px',
}) )


export const UserName = styled(Typography)( ()=>({
      fontWeight: 'bold',
}) )