import styled from "styled-components";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const ButtonContainer = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  padding-block: 1rem;
  padding-left: 1rem;
  border: 0;
  cursor: pointer;
  transition: background-color 0.2s;
  
  border: 1px solid transparent;
  border-radius: 6px;

  background: ${props => props.theme["gray-300"]};

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${props => props.theme["gray-600"]};
  }

`