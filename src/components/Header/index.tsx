import { HeaderContainer, Button, ContainerButtons, BoxButtonCar, ItemsInCarNotification } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";

// Assets
import Logo from '../../assets/logo.svg'
import { IteminCarContext } from "../../context/ItemInCar";
import { useContext, useEffect, useState } from "react";
import { states } from "../../ultis/states";

interface RegiaoUser {
  value: string;
  label: string;
}

export function Header() {
  const {itemsInCar} = useContext(IteminCarContext)
  const [regiaoUser, setRegiaoUser] = useState<RegiaoUser>()

  async function fetchApi () {
    try {
      navigator.geolocation.getCurrentPosition( async location => {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`).then(res => res.json())
        const data = await response.address
        const stateUser = states.find(item => item.label === data.city)
        setRegiaoUser(stateUser)
      });
    } catch(error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <HeaderContainer>
      <a href="/">
        <img src={Logo}/>
      </a>

      <ContainerButtons>
        <Button variant="purple">
          <MapPin size={22}/>
          <span>{regiaoUser?.label}</span> <span>{regiaoUser?.value}</span>
        </Button>
        <BoxButtonCar href="/purchase" >
          <Button variant="yellow" className="shopcart">
            <ShoppingCart size={22}/>
          </Button>
          <ItemsInCarNotification lenghtItems={itemsInCar.length}>{itemsInCar.length}</ItemsInCarNotification>
        </BoxButtonCar>
      </ContainerButtons>
    </HeaderContainer>
  )
}