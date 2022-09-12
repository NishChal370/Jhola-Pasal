import { Stack, Typography } from '@mui/material';
import { AboutCard, NumberTitle } from '../../../styles/components/home/about';

interface ITextCard{
      title: string,
      subTitle: string,
      article: string,
}

function TextCard({title, subTitle, article}: ITextCard) {

      return (
            <AboutCard sx={{ textAlign:'center' }}>
                  <NumberTitle>{title}</NumberTitle>

                  <Stack gap={1}>
                        <Typography sx={{fontWeight:'bold'}}>{subTitle}</Typography>
                        <Typography>{article}</Typography>
                  </Stack>
            </AboutCard>
      )
}

export default TextCard