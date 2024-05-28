import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu/Menu.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Home from './layout/Home/Home.tsx'



const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:'/',
        element:<Menu/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
