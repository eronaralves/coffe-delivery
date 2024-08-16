import { useLocation } from "react-router-dom"

// Styles
import * as S from './styles'

// Assets
import Delivery from '../../assets/delivery.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"
import { useEffect, useState } from "react"

// interfaces
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
  const [location, setlocation] = useState<StateProps>({} as StateProps)
  const { state: locationForm } = useLocation()
  
  useEffect(() => {
    setlocation(locationForm)
  }, [])  

  const Pagamento = {
    debit: 'Cartão de Debito',
    credit: 'Cartâo de Crédito',
    money: 'Dinheiro'
  }

  return (
    <S.PurchaseCompletContainer>
      <S.Content>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        
        <S.BorderGradient>
          <S.ContentInfos>
            <S.BoxInfo variant="purple500" maxWidth="320px">
              <span>
                <MapPin size={16} color="#fff" weight='fill'/>
              </span>
              <p>Entrega em <strong>{location?.road}, {location?.number}</strong> {location?.complement} - {location?.city}, <span>{location?.abbreviation}</span></p>
            </S.BoxInfo>

            <S.BoxInfo variant="yellow500" maxWidth="141px">
              <span>
                <Timer size={16} color="#fff" weight='fill'/>
              </span>
              <p>Previsão de entrega <strong>20 min - 30 min</strong> </p>
            </S.BoxInfo>

            <S.BoxInfo variant="yellow700" maxWidth="162px;">
              <span>
                <CurrencyDollar size={16} color="#fff" weight='fill'/>
              </span>
              <p>Pagamento na entrega <strong>{Pagamento[location?.type]}</strong></p>
            </S.BoxInfo>
          </S.ContentInfos>
        </S.BorderGradient>
      </S.Content>
      <img src={Delivery}/>
    </S.PurchaseCompletContainer>
  )
}