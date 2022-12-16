import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-block: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

`

interface ButtonType {
  variant: 'purple' | 'yellow'
}

export const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  transition: background-color 0.2s;

  color: ${props => props.variant === 'purple' ? props.theme["purple-700"]: props.theme["yellow-700"]};
  background-color: ${props => props.variant === 'purple' ? props.theme["purple-100"]: props.theme["yellow-300"]};


  &:nth-child(2):hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'purple' ? props.theme["purple-500"]: props.theme["yellow-500"]};
  }
`

export const BoxButtonCar = styled.a`
  position: relative;
  button {
    cursor: pointer;
  }

`
interface ItemsInCarNotificationProps {
  lenghtItems: number
}

export const ItemsInCarNotification = styled.span<ItemsInCarNotificationProps>`
  position: absolute;
  right: -10px;
  top: -10px;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
  font-size: 0.75rem;

  border-radius: 1000px;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme["yellow-700"]};

  display: ${props => props.lenghtItems === 0 && 'none'};
`