import { HeaderContainer, Button, ContainerButtons } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

// Assets
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <img src={Logo}/>
      </a>

      <ContainerButtons>
        <Button variant="purple">
          <MapPin size={22}/>
          Porto Alegre, RS
        </Button>
        <Button variant="yellow">
          <ShoppingCart size={22}/>
        </Button>
      </ContainerButtons>
    </HeaderContainer>
  )
}