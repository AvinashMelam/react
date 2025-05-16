import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
            <div className="container" style={{textAlign: "center", marginBottom: "20px", marginTop:"40px" ,padding: "10px"}}>  
             <h2>Home</h2> 
            </div>
    <App />
  </React.StrictMode>
);

