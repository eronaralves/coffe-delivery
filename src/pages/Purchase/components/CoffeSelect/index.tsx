import { CoffeSelectContainer, DescriptionSelect } from "./styles";

import cafe from '../../../../assets/expresso-tradicional.png'
import { Minus, Plus, Trash } from "phosphor-react";

export function CoffeSelect() {
  return (
    <CoffeSelectContainer>
      <div>
        <img src={cafe}/>
        <div>
          <h4>Expresso Tradicional</h4>
          <DescriptionSelect>
            <button>
              <Minus size={14} color="#8047F8"/>
              1
              <Plus size={14} color="#8047F8"/>
            </button>
            <button>
              <Trash size={16} color="#8047F8"/>
              Remover
            </button>
          </DescriptionSelect>
        </div>
      </div>
      <span>R$ 9,90</span>
    </CoffeSelectContainer>
  ) 
}