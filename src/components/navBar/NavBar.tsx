import { nanoid } from "nanoid";
import { ListItem, ListItemText } from "@mui/material";
import { NavContainer, AppName, NavList, ItemButton, NavButtonList, OfferButton, ShopButton } from "../../styles/components/navBar/navBar";

function NavBar() {
      
      return (
            <NavContainer>
                  <AppName variant='h1'>
                        JHOLA PASAL
                  </AppName>
                  
                  <NavList>
                        {['Home', 'About', 'Testimonials', 'Blogs'].map((item) =>{ return(
                              <ListItem disablePadding key={nanoid()}>
                                    <ItemButton>
                                          <ListItemText primary={item} />
                                    </ItemButton>
                              </ListItem>
                        ) })}
                  
                  </NavList>

                  <NavButtonList >
                        <OfferButton>Offers</OfferButton>

                        <ShopButton>Shop Now</ShopButton>
                  </NavButtonList>
            </NavContainer>
      )
}

export default NavBar