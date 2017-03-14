import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui';
import { Provider } from "react-redux"
import './index.css';
// importing components//
import Main from "./components/main";
import Login from "./components/login.js"
import Chatboard from "./components/chat.js"
import firebase from "./config/index.js"
//
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
var store = require("./store/index").storeConfig();
var action = require("./actions/index.js")

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user)
    store.dispatch(action.Login(user.uid))
    hashHistory.push("/chat")
  }
  else {
    store.dispatch(action.Logout())
    hashHistory.push("/")
  }
})


ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute  component={Login} />
          <Route path="/chat" component={Chatboard} />
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
