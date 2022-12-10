import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import {BrowserRouter as RouterDom} from 'react-router-dom'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <RouterDom>

      </RouterDom>

    </ThemeProvider>
  )
}


