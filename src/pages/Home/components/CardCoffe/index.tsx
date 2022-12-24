import { useState } from 'react';
import { useTheme } from 'styled-components'

// Styles
import * as S from './styles'

// Assets
import StarRatings from 'react-star-ratings';

interface CardCoffe {
  image: string;
  avaliation: number;
  background: string;
}

// Interfaces
interface CardCoffeProps {
  data: CardCoffe;
  selectCoffe: () => void;
}



export function CardCoffe({data, selectCoffe}: CardCoffeProps) {
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
    <S.CardCoffeContainer onClick={selectCoffe} background={data.background}>
      <img src={data.image}/>
        <div>
          <span>{data.avaliation}</span>
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