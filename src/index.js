import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom"
import { SightsProvider } from "./context";


ReactDOM.render(
  <React.StrictMode>
    
    <SightsProvider>
      <Router>
        <App />
      </Router>
    </SightsProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

