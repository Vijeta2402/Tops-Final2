import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from "./AuthContext";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);

/*
<AuthProvider>            //<App /> is the children of <AuthProvider>
   ├── App.jsx        ← children
       ├── Navbar.jsx ← children of App
       ├── Login.jsx
       └── Profile.jsx
</AuthProvider>

*/