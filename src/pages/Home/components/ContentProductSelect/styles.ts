import styled from "styled-components"

export const ContentProductSelect = styled.div`

  display: flex;
  align-items: center;
  gap: 3rem;

`

export const InfosProduct = styled.div`
  width: 100%;
  min-width: 400px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
    
  & > p {
    width: 100%;
    max-width: 390px;
    min-height: 70px;
    word-break: break-word;
  
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  & > h3 {
    margin-bottom: 1.5rem;
  }
`
export const BoxAvaliacao = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-bottom: 1.5rem;

  & > strong {
    font-size: 1.2rem;

    color: ${({theme}) => theme["green-400"]};
  }
`


export const ContainerDescription = styled.div`
  display: flex;
  gap: 1rem;

  margin-bottom: 2.5rem;

`

export const BoxDescription = styled.div`
  width: 100%;
  max-width: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  div {
    
    background-color: #fff;

    padding: 6px 12px;
    border-radius: 50%;
  }

  h3 {
    font-size: 1rem;
    font-weight: 800;
  }

`

export const ContentAddInCar = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Amount = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  font-weight: 500;

  padding: 10px 16px;
  border-radius: 6px;

  background: #fff;

  svg {
    cursor: pointer;
    font-size: 0;
    font-weight: 800;
  }

  div {
    width: 1px;
    height: 20px;

    background-color: #000;
  }
`

export const ButtonAddCar = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 8px 16px;
  border: 0;

  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;

  color: #fff;
  background: ${({theme}) => theme["green-700"]};
  
`

interface ContentImageCoffeProps {
  background: string
}

export const ContentImageCoffe = styled.div<ContentImageCoffeProps>`
  max-width: 520px;
  height: 520px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  border-radius: 50%;
  background-color: ${({background}) => background};

  img {
    max-width: 500px;
    height: 500px;
  }
`