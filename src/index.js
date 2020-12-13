import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './routes/App';
import reportWebVitals from './reportWebVitals';
import { fbaseapp } from './firebase/fbase';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from "./redux/store.js"

console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
