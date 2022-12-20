import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CardCoffeContainer, TypesCoffe, ContentAddInCar, BoxAddincar } from './styles'

// Assets
import { useState } from 'react';
import { formatterPriceInDecimal } from '../../../../ultis/formatter';


export interface CardCoffeType {
  type: string[];
  name: string;
  description: string;
  image: string,
  price: number;
}

interface CardCoffeProps {
  data: CardCoffeType;
  addInCarList: (coffeQuantity: number) => void
}

export function CardCoffe({data, addInCarList}: CardCoffeProps) {
  const [coffeQuantity, setCoffeQuantity] = useState(0)

  function quantityItem() {
    if(coffeQuantity < 5) {
      setCoffeQuantity(state => state +1)
    }
  }

  function addItem() {
    addInCarList(coffeQuantity)
    setCoffeQuantity(0)
  }

  function removeItem() {
    if(coffeQuantity > 0) {
      setCoffeQuantity(state => state -1)
    }
  }
  
  return (
    <CardCoffeContainer>
      <img src={data.image} alt={`foto de café ${data.name}`}/>
      <TypesCoffe>
        {data.type.map(item => <span key={item}>{item}</span>)}
      </TypesCoffe>

      <h3>{data.name}</h3>
      <p>{data.description}</p>

      <ContentAddInCar>
        <span>R$ <strong>{formatterPriceInDecimal.format(Number(data.price))}</strong></span>

        <BoxAddincar>
          <button type='button'>
            <Plus size={14} color="#8047F8" onClick={quantityItem}/>
            {coffeQuantity}
            <Minus size={14} color="#8047F8" onClick={removeItem}/>
          </button> 
          <span onClick={() => addItem()}>
            <ShoppingCartSimple size={18} color="#fff" weight='fill'/>
          </span>
        </BoxAddincar>
      </ContentAddInCar>
    </CardCoffeContainer>
  )
}