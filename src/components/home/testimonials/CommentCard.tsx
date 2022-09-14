import { Avatar, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { CardContainer, User, UserName, UserWrapper } from '../../../styles/components/home/testimonials';

interface ICommentCard{
      comment: string,
      name: string,
      designation: string,
      image: string,
}

function CommentCard({comment, name, designation, image}: ICommentCard) {
      
      return (
            <CardContainer>
                  <Typography>
                        {comment}
                  </Typography>

                  <User>
                        <UserWrapper>
                              <ListItemAvatar>
                                    <Avatar
                                          src={image}
                                    />
                              </ListItemAvatar>

                              <ListItemText 
                                    disableTypography
                                    primary={<UserName>{name}</UserName>} 
                                    secondary={<Typography >{designation}</Typography>}
                              />
                        </UserWrapper>
                  </User>
            </CardContainer>
      )
}

export default CommentCard