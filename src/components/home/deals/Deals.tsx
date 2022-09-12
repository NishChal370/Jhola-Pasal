import { BlueBag, GrayBag } from "../../../assets";
import { GreenButton, SubTitle, Title } from "../../../styles/app";
import { CardsContainer, DealStack, TitleStackContainer } from "../../../styles/components/home/deals";
import ProductCard from "./ProductCard";


function Deals() {
      
      return (
            <DealStack spacing={6}>
                  <TitleStackContainer spacing={2}>
                        <Title>BEST DEALS FOR YOU</Title>

                        <SubTitle>
                              Always get adieus nature day course for common. My little garret repair to desire he esteem.
                        </SubTitle>
                  </TitleStackContainer>

                  <CardsContainer>
                        <ProductCard
                              title="Walmart Academia All Over Print Backpack"
                              subTitle="How proceed offered her offense shy forming. Returned pecular."
                              image={BlueBag}
                        />

                        <ProductCard
                              title="Canyon Anti-theft backpack for Laptops"
                              subTitle="How proceed offered her offense shy forming. Returned pecular."
                              image={GrayBag}
                        />
                  </CardsContainer>

                  <GreenButton sx={{width:{xs:'20rem'}}}>View All Products</GreenButton>
            </DealStack>
      )
}

export default Deals