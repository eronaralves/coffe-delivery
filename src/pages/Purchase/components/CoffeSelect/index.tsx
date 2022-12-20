import { useContext, useState } from "react";
import { IteminCarContext, ItemsinCar } from "../../../../context/ItemInCar";
import { Minus, Plus, Trash } from "phosphor-react";

// Ultils
import {formatterPrice} from '../../../../ultils/formatter'
// Styles
import * as S from "./styles";

// Interfaces
interface CoffeSelectProps {
  data: ItemsinCar;
}

export function CoffeSelect({data}: CoffeSelectProps) {
  const {itemsInCar, setItemsInCar} = useContext(IteminCarContext)
  const [itemsInpurchase, setItemsInpurchase] = useState(data)

  async function handleAddQuantity() {
    try {
      let item = {...itemsInpurchase}
      item.quantity = item.quantity + 1
      item.currentPrice = item.currentPrice + item.price

      setItemsInpurchase(item)
      
      const shopCard = [...itemsInCar]
      let coffe = shopCard.find(coffe => coffe.id === item.id);
      
      if(coffe) {
        coffe.quantity = item.quantity
        coffe.currentPrice = item.currentPrice
      }

      localStorage.setItem('coffesIncar', JSON.stringify(shopCard))
      setItemsInCar(shopCard)
      
    } catch(error) {
      console.log(error)
    }
  }

  async function handleDecreaseQuantity() {

    try {
      let item = {...itemsInpurchase}
      if(item.quantity > 1) {
        item.quantity = item.quantity - 1
        item.currentPrice = item.currentPrice - item.price 
        setItemsInpurchase(item)
      }

      const shopCard = [...itemsInCar]
      let coffe = shopCard.find(coffe => coffe.id === item.id)

      if(coffe) {
        coffe.quantity = item.quantity
        coffe.currentPrice = item.currentPrice
      }

      localStorage.setItem('coffesIncar', JSON.stringify(shopCard))
      setItemsInCar(shopCard)

    } catch(error) {
      console.log(error)
    }
  }

  async function handleDeleteCoffe() {
    const shopCard = [...itemsInCar]
    const deleteCoffe = shopCard.filter(coffe => coffe.id !== data.id)
    
    localStorage.setItem('coffesIncar', JSON.stringify(deleteCoffe))
    setItemsInCar(deleteCoffe)
  }

  return (
    <S.CoffeSelectContainer>
      <div>
        <img src={data.image}/>
        <div>
          <h4>{data.name}</h4>
          <S.DescriptionSelect>
            <button type="button">
              <Minus size={14} color="#8047F8" onClick={() => handleDecreaseQuantity()}/>
              {itemsInpurchase.quantity}
              <Plus size={14} color="#8047F8" onClick={() => handleAddQuantity()}/>
            </button>
            <button type="button" onClick={handleDeleteCoffe}>
              <Trash size={16} color="#8047F8"/>
              Remover
            </button>
          </S.DescriptionSelect>
        </div>
      </div>
      <span>{formatterPrice.format(itemsInpurchase.price)}</span>
    </S.CoffeSelectContainer>
  ) 
}