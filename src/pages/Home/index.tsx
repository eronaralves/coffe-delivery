import { useContext, useEffect, useState } from 'react'
import { IteminCarContext } from '../../context/ItemInCar'
import { ArrowRight, Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
import { ContentProductSelect } from './components/ContentProductSelect';

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
  background: string;
};

export function Home() {
  const [coffes, setCoffes] = useState<Coffe[]>([])
  const [coffeSelect, setCoffeSelect] = useState<Coffe>(listCoffes[0] as Coffe)

  const theme = useTheme()

  async function fetchCoffes() {
    const storangeCoffe = localStorage.getItem('coffes') || `[]` 
    const newListCoffe = listCoffes.filter(coffe => coffe.id !== coffeSelect.id)

    if(storangeCoffe !== '[]') {
      setCoffes(JSON.parse(storangeCoffe))
    } else {
      setCoffes(newListCoffe as Coffe[]) 
      localStorage.setItem('coffes', JSON.stringify(newListCoffe))
    }
  }

  useEffect(() => {
    fetchCoffes()
  }, [])

  function handleSelectCoffe(data: Coffe) {
    const newListCoffe = listCoffes.filter(coffe => coffe.id !== data.id) as Coffe[]

    console.log(data)

    setCoffes(newListCoffe)
    setCoffeSelect(data)
  }

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
              <ShoppingCart size={50} color={theme['green-400']}/>
            </span>
            <div>
              <h3>Compras</h3>
              <p>Compra simples e seguranca do produto.</p>
            </div>
          </S.BoxInfos>
          <S.BoxInfos>
            <span>
              <Coffee size={50} color={theme['green-400']}/>
            </span>
            <div>
              <h3>Cafés</h3>
              <p>O café chega fresquinho até você</p>
            </div>
          </S.BoxInfos>
          <S.BoxInfos>
            <span>
              <Package size={50} color={theme['green-400']}/>
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
          <ContentProductSelect data={coffeSelect}/>
              
          <S.ListCoffes>
            {coffes.map((coffe) => <CardCoffe key={coffe.id} data={coffe} selectCoffe={() => handleSelectCoffe(coffe)}/>)}
            
          </S.ListCoffes>
        </S.ContainerProducts>
      </S.Main>
    </S.HomeContainer>
  )
}

