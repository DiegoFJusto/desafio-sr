import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // <- importa o css do tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
