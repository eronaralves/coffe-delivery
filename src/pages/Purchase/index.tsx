import { useContext } from "react";
import { CurrencyDollar, MapPinLine, Money, Bank, CreditCard } from "phosphor-react";

import { IteminCarContext } from "../../context/ItemInCar";
import { formatterPrice } from "../../ultis/formatter";

// form
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

 // Styles
import { PurchaseContainer, ContentInfoLocation, Heading, ContentInputs, Input, ReactInputmask, BoxDefault, ContainerButtons, Button, ContainerCoffesSelect, BoxCardCoffeSelect, BoxPrice,  } from "./styles";

// Components
import { CoffeSelect } from "./components/CoffeSelect";

const formSchema = z.object({
  city: z.string(),
  abbreviation: z.string().max(2, ''),
  district: z.string(),
  number: z.number(),
  complement: z.string(),
  contact: z.string(),
  road: z.string(),
  type: z.enum(['credit', 'debit', 'money'])
})

type FormInputs = z.infer<typeof formSchema>

export function Purchase() {
  const {itemsInCar} = useContext(IteminCarContext)
  const { control ,register, handleSubmit} = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'credit'
    }
  })
  
  
  const summary = itemsInCar.reduce((acc, coffe) => {
    acc.totalItems += coffe.currentPrice
    acc.entrega += coffe.amount
    if(acc.entrega === 0) {
      acc.entrega = 0
    } else {
      acc.entrega = 3
    }
    acc.total = (acc.totalItems + acc.entrega)
    return acc;
  }, {
    totalItems: 0,
    entrega: 0,
    total: 0
  })

  function handleCompletOrder(data: FormInputs)
  { 
   
    console.log(data)
  }

  return (
    <PurchaseContainer>
      <form onSubmit={handleSubmit(handleCompletOrder)}>
        <div>
          <h3>Complete seu pedido</h3>
          <ContentInfoLocation>
            <Heading>
              <MapPinLine size={22} color="#C47F17"/>
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </Heading>

            <ContentInputs>
              <Input type="text" placeholder="99 99999-9999" {...register('contact', {valueAsNumber: true})}/>
              <Input type="text" placeholder="Rua João Daniel Martinelli" {...register('road')}/>
              <div>
                <Input placeholder="100" {...register('number', {valueAsNumber: true})}/>
                <Input type="text" placeholder="Complemento" {...register('complement')}/>
              </div>
              <div>
                <Input type="text" placeholder="Farrapos" {...register('district')}/>
                <Input type="text" placeholder="Rio de Janeiro" {...register('city')}/>
                <Input type="text" placeholder="RJ" maxLength={2} {...register('abbreviation')} />
              </div>
            </ContentInputs>
          </ContentInfoLocation>
          <BoxDefault>
            <Heading>
              <CurrencyDollar size={22} color="#8047F8"/>
              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </Heading>
            <Controller
              control={control}
              name="type"
              render={({field}) => {
                return (
                  <ContainerButtons onValueChange={field.onChange} value={field.value}>
                    <Button value="credit">
                      <CreditCard color="#8047F8"/>
                      <span>Cartão de crédito</span>
                    </Button>
                    <Button value="debit">
                      <Bank color="#8047F8"/>
                      <span>cartão de débito</span>
                    </Button>
                    <Button value="money">
                      <Money color="#8047F8"/>
                      <span>dinheiro</span>
                    </Button>
                  </ContainerButtons>
                )
              }}
            />

          </BoxDefault>
        </div>
        <ContainerCoffesSelect>
          <h3>Cafés selecionados</h3>
          <div>
            <BoxCardCoffeSelect>
              {itemsInCar.map(coffe => (
                <CoffeSelect key={coffe.id} data={coffe}/>
              ))}
            </BoxCardCoffeSelect>

            <BoxPrice>
              <div>
                <span>Total de itens</span>
                <span>{formatterPrice.format(summary.totalItems)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>{formatterPrice.format(summary.entrega)}</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>{formatterPrice.format(summary.total)}</strong>
              </div>
            </BoxPrice>
            <button type="submit">confirmar pedido</button>
          </div>
        </ContainerCoffesSelect>
      </form>
    </PurchaseContainer>
  )
}