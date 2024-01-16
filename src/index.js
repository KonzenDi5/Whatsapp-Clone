import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AuthProvider } from './routes/authContext';

ReactDOM.render( //usei o ReactDOM do react 17, me sinto mais confortavel
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
