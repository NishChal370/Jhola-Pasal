import { CardActions, CardMedia, Grid, Typography } from "@mui/material";
import { CardArticle, ServiceCardContainer, CardTitle, ViewButton } from "../../../styles/components/home/services";

interface IServiceCard{
      icon: string,
      title: string,
      subTitle: string,
}

function ServiceCard({ icon, title, subTitle }: IServiceCard) {
      return (
            <Grid item>
            <ServiceCardContainer>
                  <CardMedia
                        component="img"
                        sx={{width:'3rem'}}
                        image={icon}
                        alt="service-img"
                  />

                  <CardArticle>
                        <CardTitle variant="h1">{title}</CardTitle>

                        <Typography component='h3'>{subTitle}</Typography>
                  </CardArticle>

                  <CardActions>
                        <ViewButton size="small">View detail</ViewButton>
                  </CardActions>
            </ServiceCardContainer>
            </Grid>
      )
}

export default ServiceCard