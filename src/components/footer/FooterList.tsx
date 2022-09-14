import { nanoid } from "nanoid";
import { ListItem, ListItemText } from "@mui/material";
import { ListText, ListWrapper } from "../../styles/components/footer/footer";

interface IFooterList{
      items: string[]
}

function FooterList({items}: IFooterList) {

      return (
            <ListWrapper>

                  {items.map((item)=>(
                        <ListItem disablePadding key={nanoid()}>
                              <ListItemText
                                    disableTypography
                                    primary={<ListText>{item}</ListText>}
                              />
                        </ListItem>
                  ))}
            </ListWrapper>
      )
}

export default FooterList