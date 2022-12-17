import { useLocation } from "react-router-dom"

// Styles
import { PurchaseCompletContainer, Content, BorderGradient, ContentInfos, BoxInfo } from './styles'

// Assets
import Delivery from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useEffect, useState } from "react"

const Pagamento = {
  debit: 'Cartão de Debito',
  credit: 'Cartâo de Crédito',
  money: 'Dinheiro'
} as const

export interface StateProps {
  city: string;
  abbreviation: string;
  district: string;
  number: number;
  complement: string;
  contact: number;
  road: string;
  type: 'debit' | 'money' | 'credit';
}

export function PurchaseComplet() {
  const [stateForm, setStateForm] = useState<StateProps>({} as StateProps)
  const { state } = useLocation()
  
  useEffect(() => {
    setStateForm(state)
    console.log(state)
  }, [])

  return (
    <PurchaseCompletContainer>
      <Content>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        
        <BorderGradient>
          <ContentInfos>
            <BoxInfo variant="purple500" maxWidth="320px">
              <span>
                <MapPin size={16} color="#fff" weight='fill'/>
              </span>
              <p>Entrega em <strong>{stateForm?.road}, {stateForm?.number}</strong> {stateForm?.complement} - {stateForm?.city}, {stateForm?.abbreviation}</p>
            </BoxInfo>

            <BoxInfo variant="yellow500" maxWidth="141px">
              <span>
                <Timer size={16} color="#fff" weight='fill'/>
              </span>
              <p>Previsão de entrega <strong>20 min - 30 min</strong> </p>
            </BoxInfo>

            <BoxInfo variant="yellow700" maxWidth="162px;">
              <span>
                <CurrencyDollar size={16} color="#fff" weight='fill'/>
              </span>
              <p>Pagamento na entrega <strong>{Pagamento[stateForm?.type]}</strong></p>
            </BoxInfo>
          </ContentInfos>
        </BorderGradient>
      </Content>
      <img src={Delivery}/>
    </PurchaseCompletContainer>
  )
}