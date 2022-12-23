import { useContext, useEffect, useState } from 'react'
import { IteminCarContext } from '../../context/ItemInCar'
import { ArrowRight, Coffee, Minus, Package, Plus, ShoppingCart, Timer } from 'phosphor-react'
import StarRatings from 'react-star-ratings';

// Ultils
import { listCoffes } from '../../ultils/coffes'

// Styles
import { useTheme } from 'styled-components'
import * as S from './styles'

// Assets
import Coffe from '../../assets/coffe.png'
import Americano from '../../assets/coffes/expresso-americano.png'

// Components
import { CardCoffe } from './components/CardCoffe'

// Interfaces
interface Coffe {
  id: number,
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
};

export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [rating, setRating] = useState(4)
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

  const theme = useTheme()
  const {setItemsInCar, itemsInCar} = useContext(IteminCarContext)

  async function addInCarList(data: Coffe, quantity: number) {
    try {
      const shopCart = [...itemsInCar];
      let coffe = shopCart.find(coffe => coffe.id === data.id);

      if(coffe) {
        const newQuantity = coffe.quantity + quantity;
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
      

    } catch (error: any) {
      console.log("error", error.message);
    }
 }

  async function fetchCoffes() {
    const storangeCoffe = localStorage.getItem('coffes') || `[]`

    if(storangeCoffe !== '[]') {
      setCoffes(JSON.parse(storangeCoffe))
    } else {
      setCoffes(listCoffes)
      localStorage.setItem('coffes', JSON.stringify(listCoffes))
    }
  }

  useEffect(() => {
    fetchCoffes()
  }, [])
  

  return (
    <S.HomeContainer>
      <S.Header>
        <S.About>
          <div>
            <h1>Somos <br/> coffe Delivery</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora e com muito mais sabor. Veja todos nossos produtos!</p>
            <button>Bug Now <span><ArrowRight size={10} color="#fff"/></span></button>
          </div>
          <S.BoxImage>
            <img src={Coffe}/>

            <div>
              <Package size={28} weight="fill"/>
              <Package size={30} weight="fill"/>
              <Package size={30} weight="fill"/>
              <Package size={30} weight="fill"/>
              <Package size={30} weight="fill"/>
            </div>
          </S.BoxImage>
        </S.About>
        <S.Infos>
          <S.BoxInfos>
            <span>
              <Timer size={50} weight="fill" color={theme['yellow-700']}/>
            </span>
            <div>
              <h3>Compras</h3>
              <p>Compra simples e seguranca do produto.</p>
            </div>
          </S.BoxInfos>
          <S.BoxInfos>
            <span>
              <Coffee size={50} weight="fill" color={theme['yellow-700']}/>
            </span>
            <div>
              <h3>Cafés</h3>
              <p>O café chega fresquinho até você</p>
            </div>
          </S.BoxInfos>
          <S.BoxInfos>
            <span>
              <Package size={50} weight="fill" color={theme['yellow-700']}/>
            </span>
            <div>
              <h3>Embalagem</h3>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </S.BoxInfos>
        </S.Infos>
      </S.Header>
      <S.Main>
        <S.ContainerProducts>
          <h1>Cafe Gelado</h1>
          <S.ContentProducts>
            <S.InfosProduct>
              <S.BoxAvaliacao>
                <StarRatings
                  rating={rating}
                  starDimension="15px"
                  starSpacing="0px"
                  starRatedColor={theme['yellow-500']}
                />
                <strong>R$ 39,00</strong>
              </S.BoxAvaliacao>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deleniti architecto velit cupiditate,
                libero vel, inventore eveniet reiciendis necessitatibus voluptatibus
                pariatur accusantium tempore cumque sunt neque, explicabo aut impedit asperiores?
              </p>

              <h3>Description</h3>
              <S.ContainerDescription>
                <S.BoxDescription>
                  <div>
                    <Coffee size={48} weight="fill" color={theme['green-400']}/>
                  </div>
                  <h3>Tradicional</h3>
                </S.BoxDescription>
                <S.BoxDescription>
                  <div>
                    <Coffee size={48} weight="fill" color={theme['green-400']}/>
                  </div>
                  <h3>Com leite</h3>
                </S.BoxDescription>
              </S.ContainerDescription>
                
              <S.ContentAddInCar>
                <S.Amount>
                  <Plus size={16} weight="fill" color="#000"/>
                  <div></div>
                  2
                  <div></div>
                  <Minus size={16} weight="fill" color="#000"/>
                </S.Amount>
                <S.ButtonAddCar>
                  add  to cart <ArrowRight size={10} weight="fill" color="#fff"/>
                </S.ButtonAddCar>
              </S.ContentAddInCar>
            </S.InfosProduct>
            <S.ContentImageCoffe>
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/milkshake-5780760-4848472.png"/>
            </S.ContentImageCoffe>
            <S.ListCoffes>
              <CardCoffe/>
            </S.ListCoffes>
          </S.ContentProducts>
        </S.ContainerProducts>
      </S.Main>
    </S.HomeContainer>
  )
}

