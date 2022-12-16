import { HeaderContainer, Button, ContainerButtons, BoxButtonCar, ItemsInCarNotification } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

// Assets
import Logo from '../../assets/logo.svg'
import { IteminCarContext } from "../../context/ItemInCar";
import { useContext } from "react";

export function Header() {
  const {itemsInCar} = useContext(IteminCarContext)

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
        <BoxButtonCar href="/purchase" >
          <Button variant="yellow">
            <ShoppingCart size={22}/>
          </Button>
          <ItemsInCarNotification lenghtItems={itemsInCar.length}>{itemsInCar.length}</ItemsInCarNotification>
        </BoxButtonCar>
      </ContainerButtons>
    </HeaderContainer>
  )
}