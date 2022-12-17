
export const formatterPrice = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export const formatterPriceInDecimal = new Intl.NumberFormat('pt-BR', {
  style: 'decimal',
})