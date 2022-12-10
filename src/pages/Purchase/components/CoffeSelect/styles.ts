import styled from "styled-components";

export const CoffeSelectContainer = styled.div`
  width: 100%;
  
  display: flex;
  justify-content: space-between;
  gap: 1.25;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }

  & > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  & > span {
    font-weight: 700;
    color: ${props => props.theme["gray-600"]};
  }
`

export const DescriptionSelect = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  h4 {
    color: ${props => props.theme["gray-700"]};
  }

  & > button:nth-child(1) {  
    width: 72px;
    display: flex; 
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;

    padding: 0.5rem;
    line-height: 0;
    font-weight: 400;
    border: 1px solid transparent;
    border-radius: 6px;

    color: ${props => props.theme["gray-800"]};
    background-color: ${props => props.theme["gray-300"]};

    svg {
      cursor: pointer;
    }
  }

  & > button:nth-child(2) {  
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    
    font-size: 0.75rem;
    text-transform: uppercase;

    color: ${props => props.theme["gray-600"]};
    background-color: ${props => props.theme["gray-300"]};
  }
`