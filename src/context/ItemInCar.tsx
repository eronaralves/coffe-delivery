import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface ItemsinCar {
  id: number,
  type: string[];
  name: string;
  description: string;
  price: number;
  amount: number;
  image: string;
};

interface ItemInCarType {
  itemsInCar: ItemsinCar[],
  setItemsInCar: any
}

export const IteminCarContext = createContext({} as ItemInCarType)

interface IteminCarProviderProps {
  children: ReactNode
}

export function IteminCarProvider({children}: IteminCarProviderProps) {
  const [itemsInCar, setItemsInCar] = useState<ItemsinCar[]>([])

  async function fecthItemsInCar() {
    const response = await api.get('/coffesInCar')

    setItemsInCar(response.data)
  }
  

  useEffect(() => {
    fecthItemsInCar()
  }, [])

  return (
    <IteminCarContext.Provider value={{itemsInCar, setItemsInCar}}>
      {children}
    </IteminCarContext.Provider>
  )
}