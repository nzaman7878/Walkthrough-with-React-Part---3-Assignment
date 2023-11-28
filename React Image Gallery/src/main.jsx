import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

// Create a root using ReactDOM.createRoot and specify the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app within a BrowserRouter for routing
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
