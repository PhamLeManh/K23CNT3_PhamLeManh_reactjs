import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PlmApp from './PlmApp';
import reportWebVitals from './reportWebVitals';

const plmRoot = ReactDOM.createRoot(document.getElementById('plmRoot'));
plmRoot.render(
  <React.StrictMode>
    <PlmApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
