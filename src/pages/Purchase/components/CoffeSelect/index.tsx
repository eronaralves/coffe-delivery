import { CoffeSelectContainer, DescriptionSelect } from "./styles";

import cafe from '../../../../assets/expresso-tradicional.png'
import { Minus, Plus, Trash } from "phosphor-react";
import {formatterPrice} from '../../../../ultis/formatter'
import { IteminCarContext, ItemsinCar } from "../../../../context/ItemInCar";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

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
      console.log(coffe, "COFEFFE")
      
      if(coffe) {
        await api.put(`/coffesInCar/${coffe.id}`, {
          ...coffe,
          quantity: item.quantity,
          currentPrice: item.currentPrice
        });

        coffe.quantity = item.quantity
        coffe.currentPrice = item.currentPrice
 
        console.log(shopCard)
      }

      setItemsInCar(shopCard)
      
    } catch(error) {
      console.log(error)
    }
  }

  async function handleDecreaseQuantity() {

    try {
      let item = {...itemsInpurchase}
      if(item.quantity > 0) {
        item.quantity = item.quantity - 1
        item.currentPrice = item.currentPrice - item.price 
        setItemsInpurchase(item)
      }

      const shopCard = [...itemsInCar]
      let coffe = shopCard.find(coffe => coffe.id === item.id)

      if(coffe) {
        await api.put(`/coffesInCar/${coffe.id}`, {
          ...coffe,
          quantity: item.quantity,
          currentPrice: item.currentPrice
        });
        coffe.quantity = item.quantity
        coffe.currentPrice = item.currentPrice
      }


      setItemsInCar(shopCard)

    } catch(error) {
      console.log(error)
    }
  }

  async function handleDeleteCoffe() {
    const shopCard = [...itemsInCar]

    const deleteCoffe = shopCard.filter(coffe => coffe.id !== data.id)
    await api.delete(`/coffesInCar/${data.id}`)

    setItemsInCar(deleteCoffe)
  }

  return (
    <CoffeSelectContainer>
      <div>
        <img src={data.image}/>
        <div>
          <h4>{data.name}</h4>
          <DescriptionSelect>
            <button type="button">
              <Minus size={14} color="#8047F8" onClick={() => handleDecreaseQuantity()}/>
              {itemsInpurchase.quantity}
              <Plus size={14} color="#8047F8" onClick={() => handleAddQuantity()}/>
            </button>
            <button type="button" onClick={handleDeleteCoffe}>
              <Trash size={16} color="#8047F8"/>
              Remover
            </button>
          </DescriptionSelect>
        </div>
      </div>
      <span>{formatterPrice.format(itemsInpurchase.price)}</span>
    </CoffeSelectContainer>
  ) 
}