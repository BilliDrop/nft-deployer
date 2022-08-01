import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { HashRouter } from 'react-router-dom';

import '../styles/App.css';

import PageContainer from './PageContainer';
import { PropsFromRedux } from '../containers/AppContainer';

const App = (props: PropsFromRedux) => {

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: props.darkMode ? 'dark' : 'light',
          ...(props.darkMode && {
            background: {
              default: "#131313",
              paper: "#2b2b2b"
            }
          })
        },
      }),
    [props.darkMode],
  );

  return (
    <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <PageContainer/>
        </ThemeProvider>
    </HashRouter>
  );
}

export default App;
