import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Rotas from './router';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Rotas/>  
);

reportWebVitals();
