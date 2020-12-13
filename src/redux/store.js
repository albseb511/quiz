import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { dashboardReducer } from "../routes/Dashboard"
import { authReducer } from "../routes/Auth"
import thunk from "redux-thunk"

const rootReducer = combineReducers( { auth: authReducer,  dashboard: dashboardReducer, } )


let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const enhancer = composeEnhancers(applyMiddleware(thunk));


export const store = createStore( rootReducer, enhancer )

console.log(store.getState())