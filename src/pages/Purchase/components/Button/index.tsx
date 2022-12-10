import { Bank, CreditCard, Money } from "phosphor-react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string;
  icon: 'credit' | 'debit' | 'money';
}

export function Button({icon, label}: ButtonProps) {
  return (
    <ButtonContainer >
      {icon === 'credit' ? <CreditCard color="#8047F8"/> : icon === 'debit' ? <Bank color="#8047F8"/> : <Money color="#8047F8"/>}

      <span>{label}</span>
    </ButtonContainer>
  )
}