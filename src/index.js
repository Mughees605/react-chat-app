import React from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider} from 'material-ui';
import './index.css';

// importing components//
import Main from "./components/main"
//

ReactDOM.render(
  <MuiThemeProvider>
  <Main />
  </MuiThemeProvider>,
  document.getElementById('root')
);
