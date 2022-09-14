import FooterList from "./FooterList";
import SocialImage from "./SocialImage";
import { ImageList, Typography } from "@mui/material";
import { Facebook, Instagram, LinkedIn, Twitter } from "../../assets";
import { ArticleStack, FooterContainer, FooterWrapper, ListContainer, MainTitle } from "../../styles/components/footer/footer";


function Footer() {

      return (
            <FooterContainer component='footer'>

                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240">
                        <path fill="#fff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,229.3C384,245,480,235,576,192C672,149,768,75,864,64C960,53,1056,107,1152,128C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                  </svg>
                  
                  <FooterWrapper spacing={4}>
                        <ArticleStack spacing={2}>
                              <MainTitle>JHOLA PASAL</MainTitle>

                              <Typography>
                                    Mean if he they been no hold my is all much do made took held help. Latter person am secure of estate genius at.
                              </Typography>

                              <ImageList cols={4} rowHeight={22} sx={{width:'fit-content'}} gap={16}>
                                    <SocialImage
                                          image={Facebook}
                                    />

                                    <SocialImage
                                          image={LinkedIn}
                                    />

                                    <SocialImage
                                          image={Instagram}
                                    />

                                    <SocialImage
                                          image={Twitter}
                                    />
                              </ImageList>
                        </ArticleStack>

                        <ListContainer>
                              
                              <FooterList
                                    items={['Feature', 'Pricing', 'Login', 'Singup']}
                              />

                              <FooterList
                                    items={['Terms of Use', 'Privacy Policy', 'Legal Notice']}
                              />

                              <FooterList
                                    items={['Feedback', 'Privacy Policy', 'Legal Notice']}
                              />                             
                        </ListContainer>
                  </FooterWrapper>
            </FooterContainer>
      )
}

export default Footer