import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

reportWebVitals();
