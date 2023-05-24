import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider,Route } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import About from './pages/About';
import ContactUs  from'./pages/ContactUs';
import Work  from'./pages/Work';
import Home from'./pages/Home';
 import Appacordino from"./pages/Appacordino";
import Pricing from'./pages/Pricing';
import Team from'./pages/Team';
import PortifolioSingle from"./pages/PortifolioSingle";
import Footer from'./Components/Footer';
import { BrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
    
  },
  {
    path: "About",
    element: <About/>,
  },
  {
     path:"Team",
     element:<Team/>,
  },
  {
    path: "PortifolioSingle",
    element: <PortifolioSingle/>,
  },
  {
    path:"Footer",
    element:<footer/>
  },
  {
     path: "ContactUs",
     element: <ContactUs/>,
   },
   {
     path: "Work",
     element: <Work/>,
   },
   {
     path: "Pricing",
     element: <Pricing/>,
   },
   {
     path: "Home",
     element: <Home/>,
   },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
//  <React.StrictMode>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//  </React.StrictMode>

);


