import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GlobalStyle from './global.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './routes/Home.jsx';
import Cardapio from './routes/Cardapio.jsx';

const router = createBrowserRouter([ 
  {path: "/", element: <App/> , 
    children:[
      {path: "/", element: <Home/>},
      {path: "/cardapio", element: <Cardapio/>},
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </> 
)
