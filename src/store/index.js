var Redux = require('redux');
var { loginReducer } = require('../reducer/index');
import { applyMiddleware } from "redux"
var thunk = require('redux-thunk').default;
var logger = require("redux-logger")

export var storeConfig = function () {
    var reducer = Redux.combineReducers({
        loginReducer
    });

    const middleWare = applyMiddleware(thunk, logger())
    var store = Redux.createStore(reducer, middleWare);

    return store;
}