import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import  StockContext from './pages/Trader/context/StockContext';
import ThemeContext from './pages/Trader/context/ThemeContext';
import { Trader } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Trader />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);