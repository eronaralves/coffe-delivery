import { useContext, useState } from 'react'
import StarRatings from 'react-star-ratings'
import { IteminCarContext } from '../../../../context/ItemInCar'

// Ultils
import { formatterPrice } from '../../../../ultils/formatter'

// Icons
import { ArrowRight, Minus, Plus } from 'phosphor-react'
import { GiCoffeeMug, GiMilkCarton } from 'react-icons/gi'

// Styles
import { useTheme } from 'styled-components'
import * as S from './styles'

export interface TypeCoffe {
  label: string;
  value: 'tradicional' | 'leite'
}

export interface Coffe {
  id: number,
  type: TypeCoffe[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  avaliation: number;
  background: string
};

interface ContentProductSelectProps {
  data: Coffe
}

export function ContentProductSelect({data}: ContentProductSelectProps) {
  const [quantity, setQuantity] = useState(data.quantity)
  const theme = useTheme()
  console.log(data.quantity)
  const {setItemsInCar, itemsInCar} = useContext(IteminCarContext)

  const typesCoffes = {
    tradicional: <GiCoffeeMug size={48} color={theme['green-400']}/>,
    leite: <GiMilkCarton size={48}  color={theme['green-400']}/>
  } 

  function addQuantity() {
    setQuantity(state => state + 1)
  }

  function decreaseQuantity() {

    if(quantity > 1) {
      setQuantity(state => state - 1)
    }
  }

  function addInCarList() {
    try {
      const shopCart = [...itemsInCar];
      let coffe = shopCart.find(coffe => coffe.id === data.id);

      if(coffe) {
        const newQuantity = coffe.quantity + quantity
        const newPrice = coffe.currentPrice + (quantity * data.price)

        coffe.quantity = newQuantity;
        coffe.price = newPrice
      } else {
        const newCoffe = {
          ...data,
          currentPrice: data.price * quantity,
          quantity
        }
  
        shopCart.push(newCoffe);
      }

      localStorage.setItem('coffesIncar', JSON.stringify(shopCart))
      setItemsInCar(shopCart);
    } catch(error) {
      console.log(error)
      
    }
  }

  return (
    <S.ContentProductSelect>
      <div>
        <h1>{data.name}</h1>
        <S.InfosProduct>
          <S.BoxAvaliacao>
            <StarRatings
              rating={data.avaliation}
              starDimension="15px"
              starSpacing="0px"
              starRatedColor={theme['yellow-500']}
            />
            <strong>{formatterPrice.format(data.price)}</strong>
          </S.BoxAvaliacao>
          
          <p>
            {data.description}
          </p>

          <h3>Description</h3>
          <S.ContainerDescription>
            {data.type.map((type, index) => (
              <S.BoxDescription key={index}>
                <div>
                  {typesCoffes[type.value]}
                </div>
                <h3>{type.label}</h3>
              </S.BoxDescription>
            ))}
          </S.ContainerDescription>
              
          <S.ContentAddInCar>
            <S.Amount>
              <Minus size={16} weight="fill" color="#000" onClick={decreaseQuantity}/>
              <div></div>
              {quantity}
              <div></div>
              <Plus size={16} weight="fill" color="#000" onClick={addQuantity}/>
              
            </S.Amount>
            <S.ButtonAddCar onClick={() => addInCarList()}>
              add  to cart <ArrowRight size={10} weight="fill" color="#fff" />
            </S.ButtonAddCar>
          </S.ContentAddInCar>
        </S.InfosProduct>
      </div>

      <S.ContentImageCoffe background={data.background}>
        <img src={data.image}/>
      </S.ContentImageCoffe>
    </S.ContentProductSelect>
  )
}