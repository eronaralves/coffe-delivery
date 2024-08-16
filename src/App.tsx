import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import {BrowserRouter as RouterDom} from 'react-router-dom'
import { Router } from "./Router";
import { Default } from "./layouts";
import { IteminCarProvider } from "./context/ItemInCar";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <IteminCarProvider>
        <RouterDom>
          <Router/>
          <ToastContainer />
        </RouterDom>
      </IteminCarProvider>
    </ThemeProvider>
  )
}


