import React from 'react';
import ReactDOM from 'react-dom/client';

import Myapp from './Myapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
   <h1>Hi i am index.js</h1>
   <Myapp/>
  </React.StrictMode>
);