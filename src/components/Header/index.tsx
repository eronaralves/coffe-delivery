import { useNavigate } from "react-router-dom";
import * as S from './styles'
import { MapPin, ShoppingCart } from "phosphor-react";

// Assets
import Logo from '../../assets/logo.svg'
import { IteminCarContext } from "../../context/ItemInCar";
import { useContext, useEffect, useState } from "react";
import { states } from "../../ultils/states";

interface RegiaoUser {
  value: string;
  name: string;
}

export function Header() {
  const {itemsInCar} = useContext(IteminCarContext)
  const [regiaoUser, setRegiaoUser] = useState<RegiaoUser>()

  const navigate = useNavigate()

  async function getLocation () {
    try {
      navigator.geolocation.getCurrentPosition( async location => {
        if(location) {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&format=json`).then(res => res.json())
          const data = await response.address
          const stateUser = states.find(item => data['ISO3166-2-lvl4'].includes(item.value))
          
          return setRegiaoUser(stateUser)
        } else {
          console.log('res')
        }
      }, (error) => {
        setRegiaoUser({
          value: '',
          name: ''
        })        
        console.log(error)
      });

    } catch(error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <S.HeaderContainer>
      <img src={Logo} onClick={() => {navigate('/')}}/>

      <S.ContainerButtons>
        {regiaoUser?.name !== '' && (
          <S.Button variant="purple">
            <MapPin size={22} />
            <span>{regiaoUser?.name}</span> <span>{regiaoUser?.value}</span>
          </S.Button>
        )}
        
        <S.BoxButtonCar >
          <S.Button variant="yellow" className="shopcart" onClick={() => {navigate('/purchase')}}>
            <ShoppingCart size={22}/>
          </S.Button>
          <S.ItemsInCarNotification lenghtItems={itemsInCar.length}>{itemsInCar.length}</S.ItemsInCarNotification>
        </S.BoxButtonCar>
      </S.ContainerButtons>
    </S.HeaderContainer>
  )
}