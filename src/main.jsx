import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'

const rootElement = document.getElementById("root");


createRoot(rootElement).render(
 <StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  </Routes>,
 </BrowserRouter>
 </StrictMode>
)

// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App.jsx';

// const rootElement = document.getElementById("root");

// createRoot(rootElement).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

