import { useState } from 'react';
import { formatterPrice, formatterPriceInDecimal } from '../../../../ultils/formatter';
import { useTheme } from 'styled-components'

// Styles
import * as S from './styles'

// Assets
import Coffe from '../../assets/coffe.png'
import Americano from '../../../../assets/coffes/expresso-americano.png'
import StarRatings from 'react-star-ratings';



// Interfaces
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

export function CardCoffe() {
  const [coffeQuantity, setCoffeQuantity] = useState(0)

  const theme = useTheme()

  // function quantityItem() {
  //   if(coffeQuantity < 5) {
  //     setCoffeQuantity(state => state +1)
  //   }
  // }

  // function addItem() {
  //   addInCarList(coffeQuantity)

  //   setCoffeQuantity(0)
  // }

  // function removeItem() {
  //   if(coffeQuantity > 0) {
  //     setCoffeQuantity(state => state -1)
  //   }
  // }

  return (
    <S.CardCoffeContainer>
      <img src={Americano}/>
        <div>
          <span>2.8</span>
          <StarRatings
            rating={1}
            numberOfStars={1}
            starRatedColor={theme['yellow-500']}
            starDimension="15px"
          />
        </div>
    </S.CardCoffeContainer>
  )
}