import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, AboutContent, Quality, ContainerQualifys} from './styles'

// Assets
import Coffe from '../../assets/coffe.png'

export function Home() {
  const qualifys = [
    {
      icon: <ShoppingCart size={16} weight="fill"/>,
      name: 'Compra simples e segura',
      variant: 'yellow700'
    },
    {
      icon: <Package size={16} weight="fill"/>,
      name: 'Embalagem mantém o café intacto',
      variant: 'gray800'
    },
    {
      icon: <Timer size={16} weight="fill"/>,
      name: 'Entrega rápida e rastreada',
      variant: 'yellow500'
    }
    ,
    {
      icon: <Coffee size={16} weight="fill"/>,
      name: 'O café chega fresquinho até você',
      variant: 'purple500'
    }
  ]

  return (
    <HomeContainer>
      <AboutContent>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
          <ContainerQualifys>
            {qualifys.map(item => (
              <Quality variant={item.variant}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </Quality>
            ))}
          </ContainerQualifys>
        </div>
        <img src={Coffe}/>
      </AboutContent>
    </HomeContainer>
  )
}