import ExpressoTradicional from '../assets/coffes/expresso-tradicional.png'
import ExpressoAmericano from '../assets/coffes/expresso-americano.png'
import ExpressoCremoso from '../assets/coffes/expresso-cremoso.png'
import ExpressoGelado from '../assets/coffes/expresso-gelado.png'


export const listCoffes = [
  {
    id: 1,
    image: ExpressoTradicional,
    type: [
      "Tradicional"
    ],
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 7.5,
    quantity: 0
  },
  {
    id: 2,
    image: ExpressoAmericano,
    type: [
      "Tradicional"
    ],
    "name": "Expresso Americano",
    "description": "Expresso diluído, menos intenso que o tradicional",
    "price": 9,
    "quantity": 0
  },
  {
    id: 3,
    image: ExpressoCremoso,
    type: [
      "Tradicional"
    ],
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: 10,
    quantity: 0
  },
  {
    id: 4,
    image: ExpressoGelado,
    type: [
      "Tradicional",
      "Gelado"
    ],
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 5.5,
    quantity: 0
  }
] 

export const coffesInCar = []