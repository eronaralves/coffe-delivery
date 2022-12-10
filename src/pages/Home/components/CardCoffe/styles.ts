import styled from "styled-components";

export const CardCoffeContainer = styled.div`
  flex: 1;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1.5rem 1.5rem;

  background-color: ${props => props.theme["gray-100"]};

  img {
    margin-top: -1.5rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    color: ${props => props.theme["gray-700"]};
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme["gray-500"]};
    margin-bottom: 2.0625rem;
    
  }

`

export const TypesCoffe = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 1rem;

  span {
    border-radius: 100px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;

    color: ${props => props.theme["yellow-700"]};
    background-color: ${props => props.theme["yellow-300"]};
  }
`

export const ContentAddInCar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.4375rem;

  span {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${props => props.theme["gray-600"]};

    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }

`

export const BoxAddincar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  
  button {  
    display: flex; 
    align-items: center;
    gap: 0.25rem;

    padding: 0.75rem 0.5rem;
    line-height: 0;
    font-weight: 400;
    border: 0;

    color: ${props => props.theme["gray-800"]};
    background-color: ${props => props.theme["gray-300"]};

    svg {
      cursor: pointer;
    }
  }

  span {
    padding: 0.5rem;
    background-color: ${props => props.theme["purple-700"]};
    line-height: 0;
    border-radius: 6px;

    cursor: pointer;

  }
`