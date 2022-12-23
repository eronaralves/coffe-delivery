import {BrowserRouter as RouterDom} from 'react-router-dom'
import { Router } from "./Router";

// Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

// Context
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


