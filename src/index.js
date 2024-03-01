import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CustomProvider } from './contextApi';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomProvider>
    <App />
    <ToastContainer/>
    </CustomProvider>
  </React.StrictMode>
);


