import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  padding-bottom: 9.8rem;
`

export const AboutContent = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;

  padding-block: 5.75rem;
  h2 {
    width: 100%;
    max-width: 600px;
    font-family: 'Baloo 2';
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme["gray-800"]};

    margin-bottom: 1rem;
  }

  & > p {
    width: 100%;
    max-width: 550px;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }

  img {
    width: 100%;
    max-width: 476px;
  }
`

export const ContainerQualifys = styled.div`
  width: 100%;
  max-width: 640px;

  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2.5rem;

  margin-top: 4.125rem;
`

export const Background = {
  yellow700: 'yellow-700',
  yellow500: 'yellow-500',
  purple500: 'purple-500',
  gray800: 'gray-800'
} as const

interface QualityType{
  variant: keyof typeof Background
}

export const Quality = styled.div<QualityType>`
  min-width: 231px; 
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    line-height: 0;
    padding: 0.5rem;
    border-radius: 1000px;

    color: ${props => props.theme.white};
    background-color: ${props => props.theme[Background[props.variant]]}
  }

  p {
    font-weight: 400;
    color: ${props => props.theme["gray-600"]};
  }
`

export const ContentCoffes = styled.section`


  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    margin-top: 2rem;
  }
`

export const Coffes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem 2rem;
`