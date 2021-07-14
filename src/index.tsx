import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext/authContext";
import { ToastProvider } from "./contexts/toastContext/toastContext";
import { ErrorProvider } from "./contexts/errorContext/errorContext"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ErrorProvider>
        <AuthProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </AuthProvider>
      </ErrorProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


