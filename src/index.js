import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import {BrowserRouter} from "react-router-dom";

ReactDOM.hydrateRoot(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
    document.getElementById('root')
);
