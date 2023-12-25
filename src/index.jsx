import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './app-router.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <AppRouter />
    </PrimeReactProvider>
  </React.StrictMode>,
);
