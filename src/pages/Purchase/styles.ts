import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

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
`

export const BoxDefault = styled.div`
  width: 640px;
  padding: 2.5rem;
  background-color: ${props => props.theme["gray-100"]};
`

export const ContentInfoLocation = styled(BoxDefault)`
  width: 100%;
  margin-bottom: 0.75rem;
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
    }
  
  }
`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme["gray-300"]};

  font-weight: 400;
  font-size: 0.875rem;

  background-color:  ${props => props.theme["gray-200"]};
`

export const ContainerButtons = styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
`

export const ContainerCoffesSelect = styled.div`
  width: 100%;

  & > div {
    padding: 2.5rem;
    background-color: ${props => props.theme["gray-100"]};
    
    & > button {
      width: 100%;
      border: 0;
      text-transform: uppercase;
      
      font-weight: 700;
      font-size: 0.875rem;
      border-radius: 6px;
  
      margin-top: 1.5rem;
      padding: 0.75rem 0.5rem;
  
      color: ${props => props.theme.white};
      background-color: ${props => props.theme["yellow-500"]} ;
    }
  }

`

export const BoxCardCoffeSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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