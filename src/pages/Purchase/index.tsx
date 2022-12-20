import { useContext } from "react";
import { CurrencyDollar, MapPinLine, Money, Bank, CreditCard } from "phosphor-react";


import { IteminCarContext } from "../../context/ItemInCar";
import { formatterPrice } from "../../ultis/formatter";

// form
import * as z from 'zod'
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'

 // Styles
import * as S from "./styles";

// Components
import { CoffeSelect } from "./components/CoffeSelect";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";

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
  const {itemsInCar, setItemsInCar} = useContext(IteminCarContext)
  const { control ,register, handleSubmit, formState: {

  }} = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'credit'
    }
  })
  
  const navigate = useNavigate()

  const summary = itemsInCar.reduce((acc, coffe) => {
    acc.totalItems += coffe.currentPrice
    acc.entrega += coffe.quantity
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

  async function handleCompletOrder(data: FormInputs)
  { 
    if(itemsInCar.length > 0) {
      navigate('/purchase/complet', {
        state: data
      })
      
      localStorage.setItem('coffesIncar', `[]`)
      setItemsInCar([])
    }
  }

  return (
    <S.PurchaseContainer>
      <form onSubmit={handleSubmit(handleCompletOrder)}>
        <S.ContainerInfo>
          <h3>Complete seu pedido</h3>
          <S.ContentInfoLocation>
            <S.Heading>
              <MapPinLine size={22} color="#C47F17"/>
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </S.Heading>

            <S.ContentInputs>
              <S.InputMask mask="(99) 99999-9999" placeholder="(99) 99999-9999" {...register('contact')}/>

              <S.Input type="text" placeholder="Rua João Daniel Martinelli" {...register('road')}/>
              <div>
                <S.Input type="number" placeholder="100" {...register('number', {valueAsNumber: true})}/>
                <S.Input type="text" placeholder="Complemento" {...register('complement')}/>
              </div>
              <div>
                <S.Input type="text" placeholder="Inhauma" {...register('district')}/>
                <S.Input type="text" placeholder="Rio de Janeiro" {...register('city')}/>
                <S.Input type="text" placeholder="RJ" maxLength={2} {...register('abbreviation')} />
              </div>
            </S.ContentInputs>
          </S.ContentInfoLocation>
          <S.BoxDefault>
            <S.Heading>
              <CurrencyDollar size={22} color="#8047F8"/>
              <div>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </S.Heading>
            <Controller
              control={control}
              name="type"
              render={({field}) => {
                return (
                  <S.ContainerButtons onValueChange={field.onChange} value={field.value}>
                    <S.Button value="credit">
                      <CreditCard color="#8047F8"/>
                      <span>Cartão de crédito</span>
                    </S.Button>
                    <S.Button value="debit">
                      <Bank color="#8047F8"/>
                      <span>cartão de débito</span>
                    </S.Button>
                    <S.Button value="money">
                      <Money color="#8047F8"/>
                      <span>dinheiro</span>
                    </S.Button>
                  </S.ContainerButtons>
                )
              }}
            />

          </S.BoxDefault>
        </S.ContainerInfo>
        <S.ContainerCoffesSelect>
          <h3>Cafés selecionados</h3>
          <div>
            <S.BoxCardCoffeSelect>
              {itemsInCar.length === 0 ? (
                <span>Adicione um produto em seu carrinho</span>
              ): (
                itemsInCar.map(coffe => (
                  <CoffeSelect key={coffe.id} data={coffe}/>
                ))
              )}
             
            </S.BoxCardCoffeSelect>

            <S.BoxPrice>
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
            </S.BoxPrice>
            <button type="submit" onClick={() => {navigate('/purchase')}} >confirmar pedido</button>

          </div>
        </S.ContainerCoffesSelect>
      </form>
    </S.PurchaseContainer>
  )
}