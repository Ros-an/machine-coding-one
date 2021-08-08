import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import {CartContextProvider} from "./CartContext";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartContextProvider>
    <App />
      </CartContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

