import { Stack } from '@mui/material';
import { AmazonIcon, SpaceXIcon, GoogleIcon, PaypalIcon, ModelWithBagIcon } from '../../assets';
import { GreenButton } from '../../styles/app';
import { ArticleStack, CircleBox, ClientLogoImage, ClientsList, HeaderStack, HeaderSubTitle, HeaderTitle, ImageBoxContainer, ImageBoxWrapper, ModelImage } from '../../styles/components/index';


function Header() {
      return (
            <HeaderStack>
                  <ImageBoxContainer>
                        <CircleBox></CircleBox>

                        <ImageBoxWrapper>
                              <ModelImage src={ModelWithBagIcon} alt="model-img" />
                        </ImageBoxWrapper>
                  </ImageBoxContainer>
                  
                  <ArticleStack>
                        <HeaderTitle variant="h1">Backpacking is the cure of greediness.</HeaderTitle>

                        <HeaderSubTitle variant='h2'>
                              Backpack Mini is a downscaled version of Backpack, a true Rains classic.
                              The silhouette is characterized by its prominent flap and central strap with carabiner closure.
                        </HeaderSubTitle>

                        <GreenButton>Click To Buy Now</GreenButton>

                        <Stack spacing={1}>
                              <HeaderSubTitle  variant='h2'>Trusted by:</HeaderSubTitle>

                              <ClientsList>
                                    <ClientLogoImage src={AmazonIcon} alt="amazon-img" />

                                    <ClientLogoImage src={SpaceXIcon} alt="spacex-img" />

                                    <ClientLogoImage src={GoogleIcon} alt="google-img" />

                                    <ClientLogoImage src={PaypalIcon} alt="paypal-img" />
                              </ClientsList>
                        </Stack>
                  </ArticleStack>
                  
            </HeaderStack>
      )
}

export default Header