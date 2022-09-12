import ServiceCard from "./ServiceCard";
import { DollarIcon, VanIcon, WomanIcon } from "../../../assets";
import { Title, SubTitle } from "../../../styles/app" ;
import { ServicesStack, ServiceContainer, TitleStackContainer } from "../../../styles/components/home/services";


function Services() {

      return (
            <ServicesStack gap={8}>
                  <TitleStackContainer spacing={2}>
                        <Title>WHAT WE OFFER?</Title>

                        <SubTitle>
                              This clean and ever contemporary waterproof rucksack features an 
                              internal laptop pocket a man compartment and a concealed external phone pocket on the back panel.
                        </SubTitle>
                  </TitleStackContainer>

                  <ServiceContainer container>
                        <ServiceCard
                              icon={WomanIcon}
                              title="Effective Marketing"
                              subTitle="Our AI let's you generate more effective marketing copy faster"
                        />

                        <ServiceCard
                              icon={VanIcon}
                              title="AI-power"
                              subTitle="Say goodbye to manually creating landing page and writing copy"
                        />

                        <ServiceCard
                              icon={DollarIcon}
                              title="Writer's block"
                              subTitle="Heading ia a blog writer that occurs writer's block. It is the only service"
                        />                 
                  </ServiceContainer>
            </ServicesStack>
      )
}

export default Services