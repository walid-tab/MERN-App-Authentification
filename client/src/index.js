import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import './components/StyleCss/navCss.css'
import './components/StyleCss/RegisterCss.css'
import './components/StyleCss/LoginCss.css'
import './components/StyleCss/ProfileCss.css'
import { store } from './JS/store';
import {Provider}from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
);


