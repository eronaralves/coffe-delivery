import { createContext, ReactNode, useState } from "react";

interface ItemsinCar {
  id: number
  type: string[];
  name: string;
  description: string;
  price: number
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


  return (
    <IteminCarContext.Provider value={{itemsInCar, setItemsInCar}}>
      {children}
    </IteminCarContext.Provider>
  )
}