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

  async function handleAddAmount() {
    try {
      let item = {...itemsInpurchase}
      item.amount = item.amount + 1
      item.currentPrice = item.currentPrice + item.price

      setItemsInpurchase(item)
      
      const shopCard = [...itemsInCar]
      let coffe = shopCard.find(coffe => coffe.id === item.id);
      console.log(coffe, "COFEFFE")
      
      if(coffe) {
        await api.put(`/coffesInCar/${coffe.id}`, {
          ...coffe,
          amount: item.amount,
          currentPrice: item.currentPrice
        });

        coffe.amount = item.amount
        coffe.currentPrice = item.currentPrice
 
        console.log(shopCard)
      }

      setItemsInCar(shopCard)
      
    } catch(error) {
      console.log(error)
    }
  }

  async function handleDecreaseAmount() {

    try {
      let item = {...itemsInpurchase}
      if(item.amount > 0) {
        item.amount = item.amount - 1
        item.currentPrice = item.currentPrice - item.price 
        setItemsInpurchase(item)
      }

      const shopCard = [...itemsInCar]
      let coffe = shopCard.find(coffe => coffe.id === item.id)

      if(coffe) {
        await api.put(`/coffesInCar/${coffe.id}`, {
          ...coffe,
          amount: item.amount,
          currentPrice: item.currentPrice
        });
        coffe.amount = item.amount
        coffe.currentPrice = item.currentPrice
      }


      setItemsInCar(shopCard)

    } catch(error) {
      console.log(error)
    }
  }


  return (
    <CoffeSelectContainer>
      <div>
        <img src={data.image}/>
        <div>
          <h4>{data.name}</h4>
          <DescriptionSelect>
            <button type="button">
              <Minus size={14} color="#8047F8" onClick={() => handleDecreaseAmount()}/>
              {itemsInpurchase.amount}
              <Plus size={14} color="#8047F8" onClick={() => handleAddAmount()}/>
            </button>
            <button>
              <Trash size={16} color="#8047F8"/>
              Remover
            </button>
          </DescriptionSelect>
        </div>
      </div>
      <span>{formatterPrice.format(itemsInpurchase.currentPrice)}</span>
    </CoffeSelectContainer>
  ) 
}