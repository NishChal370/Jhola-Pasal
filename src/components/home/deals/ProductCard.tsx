import { Box, CardMedia, Typography } from '@mui/material';
import { GreenButton } from '../../../styles/app';
import { Article, CardContainer, CardTitle } from '../../../styles/components/home/deals';


interface IProductCard{
      title: string,
      subTitle: string,
      image: string,
}

function ProductCard({title, subTitle, image}: IProductCard) {

      return (
            <CardContainer>
                  <Article>
                        <CardTitle variant='h2'>{title}</CardTitle>

                        <Typography>{subTitle}</Typography>
                        
                        <GreenButton>Shop Now</GreenButton>
                  </Article>

                  <CardMedia
                        component="img"
                        sx={{width:'18rem', height:'24rem'}}
                        image={image}
                        alt="green iguana"
                  />
            </CardContainer>
      )
}

export default ProductCard