import { Image, ImageContainer } from '../../styles/components/footer/footer';

interface ISocialImage{
      image: string
}

function SocialImage({image}: ISocialImage) {
      
      return (
            <ImageContainer>
                  <Image
                        src={image}
                        alt={'social-icon'}
                  />
            </ImageContainer>
      )
}

export default SocialImage