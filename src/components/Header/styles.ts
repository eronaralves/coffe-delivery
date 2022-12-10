import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding-block: 32px;

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
  gap: 0,25rem;

  padding: 0.5rem;

  border: 0;
  border-radius: 6px;
  cursor: pointer;

  color: ${props => props.variant === 'purple' ? props.theme["purple-700"]: props.theme["yellow-700"]};
  background-color: ${props => props.variant === 'purple' ? props.theme["purple-100"]: props.theme["yellow-300"]};
  transition: background-color 0.2s;

  &:hover {
    color: ${props => props.theme.white};
    background-color: ${props => props.variant === 'purple' ? props.theme["purple-500"]: props.theme["yellow-500"]};

  }
`