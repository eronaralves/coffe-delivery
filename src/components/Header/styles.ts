import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-block: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  & > img {
    cursor: pointer;
  }
  
`
export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

`

export const BackgroundButton = {
  purple: 'purple-700',
  yellow: 'yellow-700'
} as const

const ColorButton = {
  purple: 'purple-100',
  yellow: 'yellow-300'
} as const

interface ButtonType {
  variant: keyof typeof BackgroundButton
} 

export const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  transition: background-color 0.2s;

  color: ${props => props.theme[BackgroundButton[props.variant]]};
  background-color: ${props => props.theme[ColorButton[props.variant]]};

  & > span:nth-child(2)::after {
    content: ',';
  }

  @media(max-width: 370px) {
    & > span:nth-child(2) {
      display: none;
    }
  }

 
`

export const BoxButtonCar = styled.div`
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