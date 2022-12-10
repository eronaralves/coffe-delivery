import { HeaderContainer, Button, ContainerButtons, BoxButtonCar } from "./styles";
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
        <BoxButtonCar href="/purchase">
          <Button variant="yellow">
            <ShoppingCart size={22}/>
          </Button>
          <span>3</span>
        </BoxButtonCar>
      </ContainerButtons>
    </HeaderContainer>
  )
}