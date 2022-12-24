import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding-bottom: 9.8rem;
`

export const Header = styled.header`
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;
  justify-content: space-between;
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
    width: 80px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #fff;
    line-height: 0;
    border-radius: 50px;
    padding: 8px;
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
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;
`

export const ContainerProducts = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    font-family: 'Baloo 2';
    margin-bottom: 0.3rem;
  }
`

export const ListCoffes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`