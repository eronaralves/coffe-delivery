import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { StateProps } from "../../pages/PurchaseComplet";
import { DefaultContainer, Content } from "./styles";

export function Default() {
  return (
    <DefaultContainer>
      <Content>
        <Header/>
        <Outlet/>
      </Content>
    </DefaultContainer>
  )
}