import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding-bottom: 9.8rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.5rem;
`

export const About = styled.header`
  display: flex;
  gap: 4rem;


  h1 {
    width: 100%;
    max-width: 400px;

    font-size: 3rem;
    font-weight: 900;
    line-height: 1.1;

    margin-bottom: 2rem;

    color: ${({theme}) => theme["blue-900"]};
  }

  p {
    width: 100%;
    max-width: 270px;

    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.8;

    margin-bottom: 2rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 12px;

    padding: 16px 25px;

    border: 0;
    border-radius: 50px;
    box-shadow: -5px 15px 22px #d7c4b5;
    cursor: pointer;

    font-size: 0.8rem;
    font-weight: 700;
    line-height: 0;

    color: #fff;
    background: ${({theme}) => theme["blue-900"]};
  }

  span {
    line-height: 0;
    border-radius: 20px;
    padding: 4px;
    background: ${({theme}) => theme["orange-600"]};
  }
`

export const BoxImage = styled.div`
  width: 100%;
  max-width: 450px;

  position: relative;

  img {
    width: 100%;
  }

  div {
    display: flex;
    gap: 8px;

    position: absolute;
    bottom: 30px;
    left: -30px;

    padding: 16px;

    border: 0;
    border-radius: 50px;

    background: #fff;
  }
`

export const BoxInfos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    background-color: #fff;
    line-height: 0;
    padding: 6px;
    border-radius: 50px;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
  }

  p {
    max-width: 150px;

    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Main = styled.main`
  width: 100%;
`

export const ContainerProducts = styled.div`
  width: 100%;

  h1 {
    font-size: 2.5rem;
    font-family: 'Baloo 2';
    margin-bottom: 0.3rem;
  }
`

export const ContentProducts = styled.div`
  display: flex;
  justify-content: space-between;

`

export const InfosProduct = styled.div`
  display: flex;
  flex-direction: column;
    
  & > p {
    width: 100%;
    max-width: 400px;
  
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

export const ContentImageCoffe = styled.div`

  border-radius: 50%;
  background-color: #EBE5F9;
`

export const ListCoffes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`