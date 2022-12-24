import styled from "styled-components";

interface CardCoffeContainerProps {
  background: string
}

export const CardCoffeContainer = styled.div<CardCoffeContainerProps>`
  width: 150px;
  height: 150px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  border-radius: 50%;

  cursor: pointer;
  background-color: ${({background}) => background};

  img {
    width: 90px;
  }

  & > div {
    width: 100%;
    max-width: 50px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    
    position: absolute;
    bottom: 15px;
    right: 0px;

    padding: 6px 30px;

    line-height: 0;
    border-radius: 6px;

    background: #fff;

    span {
      font-size: 0.8rem;
      font-weight: 800;
    }
  }

`