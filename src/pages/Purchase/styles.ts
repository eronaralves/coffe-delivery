import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';
import ReactInputMask from "react-input-mask";
import { InputHTMLAttributes } from "react";

export const PurchaseContainer = styled.main`
  form {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    h3 {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: 1.125rem;
      margin-bottom: 1rem;

      color: ${props => props.theme["gray-700"]};
    }
  }

  @media(max-width: 1100px) {
    form {
      display: flex;
      flex-wrap: wrap;
    }

  }
`

export const ContainerInfo = styled.div`
  flex: 1;

  @media(max-width: 1100px) {
    width: 100%;
    max-width: none;
    flex: none;

  }
`

export const BoxDefault = styled.div`
  width: 100%;
  padding: 2.5rem;
  background-color: ${props => props.theme["gray-100"]};

  @media(max-width: 1100px) {
    width: 100%;
    max-width: none;
  }

  @media(max-width: 480px) {
    padding: 1.5rem;
  }
`

export const ContentInfoLocation = styled(BoxDefault)`
  width: 100%;
  margin-bottom: 0.75rem;

  @media(max-width: 705px) {
    width: 100%;
    max-width: 640px;
  }
`

export const Heading = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  span {
    font-weight: 400;
    color: ${props => props.theme["gray-700"]}
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["gray-600"]}
  }
`

export const ContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px 12px;
  
  & > input:nth-child(1) {
    width: 100%;
    max-width: 200px;
  }

  div { 
    width: 100%;
    display: flex;
    gap: 16px 12px;
    
    & > input:nth-child(1) {
      width: 100%;
      max-width: 200px;
    }

    & > input:nth-child(2) {
      flex: 1;
    }

    & > input:nth-child(3) {
      width: 100%;
      max-width: 60px;
      text-transform: uppercase;
    }
  }

  @media(max-width: 480px) {
    & > input:nth-child(1) {
      flex: 1;
      max-width: none;
    }

    div {
      display: flex;
      flex-direction: column;

      & > input:nth-child(1) {
        flex: 1;
        max-width: none;
      }

      & > input:nth-child(3) {
        flex: 1;
        max-width: none;
      }
    }

  }

`

export const InputMask = styled(ReactInputMask)`
  width: 100%;
  background-color:  ${props => props.theme["gray-200"]};
  padding: 0.75rem;
  border: 1px solid ${props => props.theme["gray-300"]};
  border-radius: 4px;
  font-weight: 400;
  font-size: 0.875rem;
`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme["gray-300"]};
  border-radius: 4px;
  font-weight: 400;
  font-size: 0.875rem;

  background-color:  ${props => props.theme["gray-200"]};
`

export const ContainerButtons = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
  
  @media(max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`


export const Button = styled(RadioGroup.Item)`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-block: 1rem;
  padding-left: 1rem;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  border: 1px solid transparent;
  border-radius: 6px;

  background: ${props => props.theme["gray-300"]};
  
  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${props => props.theme["gray-600"]};
  }

  &:hover {
    background: ${props => props.theme["gray-400"]};
  }

  &[data-state='checked'] {
    background: ${props => props.theme["purple-100"]};
    border: 1px solid ${props => props.theme["purple-500"]};
  }

  @media(max-width: 690px) {
    display: flex;
    gap: 0.75rem;
    padding-inline: 0.7rem;

    span {
      font-size: 0.7rem;
    }
  }

`

export const ContainerCoffesSelect = styled.div`
  width: 100%;
  max-width: 500px;

  & > div {
    width: 100%;
    padding: 2.5rem;
    background-color: ${props => props.theme["gray-100"]};
    
    & > a > button {
      width: 100%;
      border: 0;
      text-transform: uppercase;
      
      font-weight: 700;
      font-size: 0.875rem;
      border-radius: 6px;
  
      margin-top: 1.5rem;
      padding: 0.75rem 0.5rem;
      transition: background-color 0.2s;
      cursor: pointer;
  
      color: ${props => props.theme.white};
      background-color: ${props => props.theme["yellow-500"]} ;
    }

    & > a > button:hover {
      background-color: ${props => props.theme["yellow-700"]} ;
    }

    & > a > button:disabled {
      cursor: help;
    }
  }

  @media(max-width: 1100px) {
    width: 100%;
    max-width: none;
    flex: none;
  }

  @media(max-width: 480px) {
    width: 100%;
    max-width: none;
    flex: none;

    & > div {
      padding: 1.5rem;
    }
  }

`

export const BoxCardCoffeSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & > span {
    text-align: center;
    font-size: 0.875rem;
    color: ${props => props.theme["gray-600"]}
  }
`

export const BoxPrice = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["gray-600"]}
    }

    strong {
      font-weight: 700;
      font-size: 1.25rem;
      color: ${props => props.theme["gray-700"]}
    }
  }
  
`