import { createContext, ReactNode, useEffect, useState } from "react";

export interface ItemsinCar {
  id: number,
  type: string[];
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  currentPrice: number
};

interface ItemInCarProvider {
  itemsInCar: ItemsinCar[],
  setItemsInCar: any
}

export const IteminCarContext = createContext({} as ItemInCarProvider)

interface IteminCarProviderProps {
  children: ReactNode
}

export function IteminCarProvider({children}: IteminCarProviderProps) {
  const [itemsInCar, setItemsInCar] = useState<ItemsinCar[]>([])

  async function fecthItemsInCar() {
    const ItemInCarStorange = localStorage.getItem('coffesIncar') || `[]`

    setItemsInCar(JSON.parse(ItemInCarStorange))
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