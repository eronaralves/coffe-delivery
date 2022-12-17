import styled from "styled-components";

export const DefaultContainer = styled.div`
  width: 100%;
  padding-inline: 2rem;

  @media(max-width: 600px) {
    padding-inline: 1.2rem;
  }
`

export const Content = styled.main`
  width: 100%;
  max-width: 74rem;
  margin: 0 auto;
`