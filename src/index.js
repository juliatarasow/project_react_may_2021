import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from "react-router-dom"
import { AllProvider } from "./context";


ReactDOM.render(
  <React.StrictMode>

    <AllProvider>
      <Router>
        <App />
      </Router>
    </AllProvider>


  </React.StrictMode>,
  document.getElementById('root')
);

