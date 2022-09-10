import { ListItem, ListItemText } from "@mui/material";
import { NavContainer, AppName, NavList, ItemButton, NavButtonList, OfferButton, ShopNowButton } from "../../styles/components";


function NavBar() {
      
      return (
            <NavContainer>
                  <AppName variant='h1'>
                        JHOLA PASAL
                  </AppName>
                  
                  <NavList>
                        <ListItem disablePadding>
                              <ItemButton>
                                    <ListItemText primary={'Home'} />
                              </ItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                              <ItemButton>
                                    <ListItemText primary={'About'} />
                              </ItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                              <ItemButton>
                                    <ListItemText primary={'Testimonials'} />
                              </ItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                              <ItemButton>
                                    <ListItemText primary={'Blogs'} />
                              </ItemButton>
                        </ListItem>
                  </NavList>

                  <NavButtonList >
                        <OfferButton>Offers</OfferButton>

                        <ShopNowButton>Shop Now</ShopNowButton>
                  </NavButtonList>
            </NavContainer>
      )
}

export default NavBar