import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import {BrowserRouter as RouterDom} from 'react-router-dom'
import { Router } from "./Router";
import { Default } from "./layouts/Default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <RouterDom>
        <Router/>
      </RouterDom>
    </ThemeProvider>
  )
}


