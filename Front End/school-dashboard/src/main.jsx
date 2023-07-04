import React from 'react';
import ReactDOM from 'react-dom/client';
import { SchoolApp } from './SchoolApp.jsx';

import 'sweetalert2/dist/sweetalert2.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SchoolApp />
  </React.StrictMode>,
)