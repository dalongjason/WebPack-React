/**
 *  Created by hu on 2019-04-17.
 *  Updated for React 18
 **/
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './views/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
