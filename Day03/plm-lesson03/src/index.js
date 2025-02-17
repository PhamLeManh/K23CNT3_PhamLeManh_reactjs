import React from 'react';
import ReactDOM from 'react-dom/client';
import PlmApp from './PlmApp';
import reportWebVitals from './reportWebVitals';

const plmRoot = ReactDOM.createRoot(document.getElementById('plmRoot'));
plmRoot.render(
  <React.StrictMode>
    <PlmApp />
  </React.StrictMode>
);

reportWebVitals();

