import { CurrencyDollar, MapPinLine } from "phosphor-react";

import { Button } from "./components/Button";
import { CoffeSelect } from "./components/CoffeSelect";
import { PurchaseContainer, ContentInfoLocation, Heading, ContentInputs, Input, BoxDefault, ContainerButtons, ContainerCoffesSelect,BoxCardCoffeSelect, BoxPrice } from "./styles";

export function Purchase() {
  return (
    <PurchaseContainer>
      <form>
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
              <Input type="text" placeholder="99999-999"/>
              <Input type="text" placeholder="Rua João Daniel Martinelli"/>
              <div>
                <Input type="number" placeholder="100"/>
                <Input type="text" placeholder="Complemento"/>
              </div>
              <div>
                <Input type="text" placeholder="Farrapos"/>
                <Input type="text" placeholder="Rio de Janeiro"/>
                <Input type="text" placeholder="RJ" maxLength={2}/>
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
            <ContainerButtons>
              <Button icon="credit" label="Cartão de crédito"/>
              <Button icon="debit" label="cartão de débito"/>
              <Button icon="money" label="dinheiro "/>
            </ContainerButtons>
          </BoxDefault>
        </div>
        <ContainerCoffesSelect>
          <h3>Cafés selecionados</h3>
          <div>
            <BoxCardCoffeSelect>
              <CoffeSelect/>
              <CoffeSelect/>
            </BoxCardCoffeSelect>

            <BoxPrice>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>R$ 33,20</strong>
              </div>
            </BoxPrice>
            <button>confirmar pedido</button>
          </div>
        </ContainerCoffesSelect>
      </form>
    </PurchaseContainer>
  )
}