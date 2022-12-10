import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { CardCoffeContainer, TypesCoffe, ContentAddInCar, BoxAddincar } from './styles'

// Assets
import Coffe from '../../../../assets/expresso-tradicional.png'


interface CardCoffeType {
  type: string[];
  name: string;
  description: string;
  price: number
}

interface CardCoffeProps {
  data: CardCoffeType
}

export function CardCoffe({data}: CardCoffeProps) {
  return (
    <CardCoffeContainer>
      <img src={Coffe}/>
      <TypesCoffe>
        {data.type.map(item => <span>{item}</span>)}
      </TypesCoffe>

      <h3>{data.name}</h3>
      <p>{data.description}</p>

      <ContentAddInCar>
        <span>R$ <strong>{data.price}</strong></span>

        <BoxAddincar>
          <button>
            <Plus size={14} color="#8047F8"/>
            1
            <Minus size={14} color="#8047F8"/>
          </button>
          <span><ShoppingCartSimple size={18} color="#fff" weight='fill'/></span>
        </BoxAddincar>
      </ContentAddInCar>
    </CardCoffeContainer>
  )
}