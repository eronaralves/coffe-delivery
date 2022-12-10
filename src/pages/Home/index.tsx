import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, AboutContent, Quality, ContainerQualifys, ContentCoffes, Coffes, Background} from './styles'

// Assets
import Coffe from '../../assets/coffe.png'
import { CardCoffe } from './components/CardCoffe'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IteminCarContext } from '../../context/ItemInCar'

interface Coffe {
  id?: number,
  type: string[];
  name: string;
  description: string;
  price: number;
  amount?: number;
  image: string;
};

export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([
      {
        id: 1,
        image: "./src/assets/expresso-tradicional.png",
        type: [
          "Tradicional"
        ],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        price: 10, 
        amount: 0
      },
      {
        id: 2,
        image: "./src/assets/expresso-americano.png",
        type: [
          "Tradicional"
        ],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        price: 9,
        amount: 0
      },
      {
        id: 3,
        image: "./src/assets/expresso-cremoso.png",
        type: [
          "Tradicional"
        ],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        price: 10,
        amount: 0
      },
      {
        "id": 4,
        image: "./src/assets/expresso-gelado.png",
        type: [
          "Tradicional",
          "Gelado"
        ],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        price: 10,
        amount: 0
      }])
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
  ] as const

  const {setItemsInCar, itemsInCar} = useContext(IteminCarContext)

  function addInCarList(coffe: any, amount: number) {
    const isItemNew = itemsInCar.find(item => item.id === coffe.id)

    if(!isItemNew) {
      const CoffeWithAmount = {
        ...coffe,
        amount: amount
      }
  
      setItemsInCar((state: Coffe[]) => [...state, CoffeWithAmount])
      console.log(itemsInCar)
    }
  }

  // async function fetchCoffes() {
  //   const response = await api.get('/coffes')
  //   setCoffes(response.data)
  // }

  // useEffect(() => {
  //   fetchCoffes()
  // }, [])

  return (
    <HomeContainer>
      <AboutContent>
        <div>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          
          <ContainerQualifys>
            {qualifys.map((item, index) => (
              <Quality key={index} variant={item.variant}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </Quality>
            ))}
          </ContainerQualifys>
        </div>
        <img src={Coffe}/>
      </AboutContent>

      <ContentCoffes>
        <h2>Nossos cafés</h2>

        <Coffes>
          {coffes.map(coffe => (
            <CardCoffe key={coffe.id} data={coffe} addInCarList={(amount) => addInCarList(coffe, amount)}/>
          ))}
        </Coffes>
      </ContentCoffes>
    </HomeContainer>
  )
}