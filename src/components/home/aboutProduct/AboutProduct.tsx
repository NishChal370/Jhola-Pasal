import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Stack } from "@mui/system"
import { GreenBag, GreenTick } from "../../../assets"
import { Title } from "../../../styles/app"
import { AboutProductStack, Image, ListImage, MainImageBox } from "../../../styles/components/home/aboutProduct"


function AboutProduct() {

      return (
            <AboutProductStack>
                  <Stack spacing={2}>
                        <Title>ABOUT THIS PRODUCT</Title>

                        <Typography>
                              Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. 
                              Hill sold ham men made loose case. VIews abode law meard jokes too. Was are delightful solicitude discovered collecting man day.
                        </Typography>

                        <List>
                        {
                              ['100% polyester with polyurethane coating', 
                              'flat laptop pocket fits 13* device with sleeve',
                              'Flap with magnet snap fastenings',
                              'Adjustable backstraps',
                              'Measurements H4o X W29 X D10cm',
                              'Water cloumn pressure: 8000 mm'].map((item)=>{ return(
                                    <ListItem disablePadding>
                                          <ListImage>
                                                <Image>
                                                      <img style={{width:'100%'}} src={GreenTick} alt='green-tick'/>
                                                </Image>
                                          </ListImage>

                                          <ListItemText primary={item} />
                                    </ListItem>

                              ) })
                        }
                        </List>
                  </Stack>

                  <MainImageBox component='figure'>
                        <img src={GreenBag} alt="green-bag" 
                              style={{width:'100%', height:'100%'}}
                        />
                  </MainImageBox>
      </AboutProductStack>
      )
}

export default AboutProduct