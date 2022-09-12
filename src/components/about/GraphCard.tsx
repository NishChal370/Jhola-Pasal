import { Box, Stack } from '@mui/material';
import { Graph } from '../../assets';
import { AboutCard, CardImage, CardImageContainer, CardTitle, NumberTypography } from '../../styles/components/home/about';

interface IGraphCard{
      title: string, 
      numberOne: string,
      numberTwo: string,
}

function GraphCard({title, numberOne, numberTwo}: IGraphCard) {

      return (
            <AboutCard>
                  <CardTitle>{title}</CardTitle>

                  <Stack direction='row' gap={4}>
                        <Box>
                              <NumberTypography color={'#32CD32'}>{numberOne}</NumberTypography>
                              <NumberTypography color={'#FFD700'}>{numberTwo}</NumberTypography>
                        </Box>

                        <CardImageContainer component='figure'>
                              <CardImage src={Graph} alt="graph-img" />
                        </CardImageContainer>
                  </Stack>
            </AboutCard>
      )
}

export default GraphCard