import styled from "styled-components";

export const PurchaseCompletContainer = styled.div`
  width: 100%;
  height: 100%;
  
  display: flex;
  align-items: flex-end;

  margin-top: 5rem;
`

export const Content = styled.div`
  width: 100%;
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    color: ${props => props.theme["yellow-700"]};
  }

  & > p {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${props => props.theme["gray-700"]};
  }
`

export const BorderGradient = styled.div`
  width: 100%;
  max-width: 526px;
  
  padding: 1px;
  margin-top: 2.5rem;

  overflow: hidden;
  position: relative;
  
  border-radius: 6px 36px;
  background: linear-gradient(to right, #DBAC2C, #8047F8);
`

export const ContentInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  background: ${props => props.theme.white};
  border-radius: 6px 36px;
`
export const Background = {
  yellow700: 'yellow-700',
  yellow500: 'yellow-500',
  purple500: 'purple-500',
} as const

interface QualityType{
  variant: keyof typeof Background;
  maxWidth: string;
}


export const BoxInfo = styled.div<QualityType>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;

    padding: 0.5rem;
    line-height: 0;
    border-radius: 1000px;
    background-color: ${props => props.theme[Background[props.variant]]}
  }

  p {
    width: 100%;
    max-width: ${props => props.maxWidth};

    font-weight: 400;
    font-size: 1rem;
    color: ${props => props.theme["gray-600"]};
  }
`