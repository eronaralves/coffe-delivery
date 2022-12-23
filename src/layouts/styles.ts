import styled from "styled-components";

export const DefaultContainer = styled.div`
  width: 100%;
  height: 100vh;

  padding-inline: 2rem;

  background: ${({theme}) => theme["begge-400"]};
  @media(max-width: 600px) {
    padding-inline: 1.2rem;
  }
`

export const Content = styled.main`
  width: 100%;
  max-width: 78rem;
  margin: 0 auto;

`
