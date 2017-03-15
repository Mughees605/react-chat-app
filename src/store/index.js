var Redux = require('redux');
var { loginReducer , getData} = require('../reducer/index');
import { applyMiddleware } from "redux"
var thunk = require('redux-thunk').default;
var logger = require("redux-logger")

export var storeConfig = function () {
    var reducer = Redux.combineReducers({
        userData:loginReducer,
        getData
    });

    const middleWare = applyMiddleware(thunk, logger())
    var store = Redux.createStore(reducer, middleWare);

    return store;
}