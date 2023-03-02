import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

import Scheduler from './containers/Scheduler.container'

import {theme} from './styling/theme'

const GlobalStyle = createGlobalStyle`
    ${reset}
    html,body,#root{
      height: 100%;
    }

    body {
      background-color: ${props => props.theme.colors.background};
      font-family: ${({theme}) => theme.fonts.system};
      margin: 0;
      color: ${props => props.theme.colors.text};
      margin: ${props => props.theme.margin.all};
    }
    strong {
      font-weight: bold;
    }
    hr {
      margin: 2em 0;
      border-color: rgba(0, 0, 0, 0.1);
    }

    .react-horizontal-scrolling-menu--wrapper {
      width: 100%;
    }
  `;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Scheduler/>
    
    </ThemeProvider>
  );
}

export default App;
