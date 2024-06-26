import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu/Menu.tsx'
import Cart from './pages/Cart/Cart.tsx'
import Home from './layout/Home/Home.tsx'
import Product from './pages/Product/Product.tsx'
import Auth from './layout/auth/Auth.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
// import axios from 'axios'
// import { url } from './helpers/Api.ts'



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
      },
      {
        path:"/product/:id",
        element:<Product/>,
        // loader:async({params})=>{
        //  let res =  await axios.get(`${url}/products/${params.id}`)
         //   return res
        // }

        // loader:()=>{
        //   return 10
        // }
      },
    ]
  }
  ,
  {
    path:"/auth",
    element:<Auth/>,
    children:[
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
