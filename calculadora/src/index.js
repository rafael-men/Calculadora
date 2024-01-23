import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/calculator';
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
    <h1 className='título'>Calculadora</h1>
    <Calculator/>
</div>)
reportWebVitals()