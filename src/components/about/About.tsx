import TextCard from "./TextCard";
import GraphCard from "./GraphCard";
import { Box, Stack } from "@mui/material";
import { GreenButton, Title } from "../../styles/app"; 
import { AboutStack, Article, CardsContainer, DetailStack } from "../../styles/components/home/about";


function About() {

      return (
            <AboutStack>
                  <DetailStack>
                        <Title variant="h2">About Us</Title>

                        <Box  component='span'>
                              <Article variant="h3">
                                    Compliment interested discretion estimating on stimulated apartments oh. 
                                    Dear so sing when in find read of call. As distrusts behavior abilities defective is. Never as water me might.
                                    On forcemeats hunted unable merely by mr whence or. Possession the unpleasing simplicity her uncommonly.<br/><br/>
                                    Delightful remarkably mr on announcing themselves entreaties favorable. About to in so terms voice at Equal an would is found seems of.
                              </Article>
                              <br/>
                              
                              <GreenButton>Click To Buy Now</GreenButton>
                        </Box>
                  </DetailStack>

                  <CardsContainer>
                        <Stack spacing={2}>
                              <GraphCard
                                    title="Product Users"
                                    numberOne="+ 12.5k"
                                    numberTwo="25k+"
                              />

                              <TextCard
                                    title="2.5k+"
                                    subTitle="Insta Followers"
                                    article="We strongly believe that successful content marketing"
                              />
                        </Stack>


                        <TextCard
                              title="95%"
                              subTitle="Positive Feedback"
                              article="We strongly believe that successful content marketing"
                        />
                  </CardsContainer>
            </AboutStack>
      )
}

export default About