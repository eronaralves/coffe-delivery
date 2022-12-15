import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import { HomeContainer, AboutContent, Quality, ContainerQualifys, ContentCoffes, Coffes, Background} from './styles'

// Assets
import Coffe from '../../assets/coffe.png'
import { CardCoffe } from './components/CardCoffe'
import { useContext, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IteminCarContext } from '../../context/ItemInCar'
import { formToJSON } from 'axios'

interface Coffe {
  id: number,
  type: string[];
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
  currentPrice?: number;
};

export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [locatio, setLocation] = useState('')
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

  async function addInCarList(data: Coffe, amount: number) {
    try {
      const shopCart = [...itemsInCar];
      
      let coffe = shopCart.find(coffe => coffe.id === data.id);
      if(coffe) {
        const newAmount = coffe.amount + amount;
        const newPrice = coffe.currentPrice + (amount * data.price)

        await api.put(`/coffesInCar/${coffe.id}`, {
          ...coffe,
          currentPrice: newPrice,
          amount: newAmount
        });

        coffe.amount = newAmount;
        coffe.price = newPrice
      } else {
        
        const newCoffe = {
          ...data,
          currentPrice: data.price * amount,
          amount
        }
        
        await api.post('/coffesInCar', newCoffe);
        shopCart.push(newCoffe);
      }

      setItemsInCar(shopCart);
      

    } catch (error: any) {
      console.log("error", error.message);
    }
 }

  async function fetchCoffes() {
    const response = await api.get('/coffes')
    setCoffes(response.data)
  }

  useEffect(() => {
    fetchCoffes()
  }, [])
  

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