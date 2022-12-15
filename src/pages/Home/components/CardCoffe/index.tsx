import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CardCoffeContainer, TypesCoffe, ContentAddInCar, BoxAddincar } from './styles'

// Assets
import { useState } from 'react';


export interface CardCoffeType {
  type: string[];
  name: string;
  description: string;
  image: string,
  price: number;
}

interface CardCoffeProps {
  data: CardCoffeType;
  addInCarList: (coffeAmount: number) => void
}

export function CardCoffe({data, addInCarList}: CardCoffeProps) {
  const [coffeAmount, setCoffeAmount] = useState(0)

  function amountItem() {
    if(coffeAmount < 5) {
      setCoffeAmount(state => state +1)
    }
  }

  function addItem() {
    addInCarList(coffeAmount)
    
    setCoffeAmount(0)
  }

  function removeItem() {
    if(coffeAmount > 0) {
      setCoffeAmount(state => state -1)
    }
  }

  return (
    <CardCoffeContainer>
      <img src={data.image}/>
      <TypesCoffe>
        {data.type.map(item => <span key={item}>{item}</span>)}
      </TypesCoffe>

      <h3>{data.name}</h3>
      <p>{data.description}</p>

      <ContentAddInCar>
        <span>R$ <strong>{data.price}</strong></span>

        <BoxAddincar>
          <button>
            <Plus size={14} color="#8047F8" onClick={amountItem}/>
            {coffeAmount}
            <Minus size={14} color="#8047F8" onClick={removeItem}/>
          </button>
          <span onClick={() => addItem()}><ShoppingCartSimple size={18} color="#fff" weight='fill'/></span>
        </BoxAddincar>
      </ContentAddInCar>
    </CardCoffeContainer>
  )
}