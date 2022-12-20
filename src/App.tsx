import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import {BrowserRouter as RouterDom} from 'react-router-dom'
import { Router } from "./Router";
import { Default } from "./layouts";
import { IteminCarProvider } from "./context/ItemInCar";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <IteminCarProvider>
        <RouterDom>
          <Router/>
        </RouterDom>
      </IteminCarProvider>
    </ThemeProvider>
  )
}


