import React, { useContext, useEffect } from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Brands from './Components/Brands/Brands';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Cart from './Components/Cart/Cart';
import NotFound from './Components/NotFound/NotFound';
import UserContextProvider, { UserContext } from './Context/UserContext';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Profile from './Components/Profile/Profile';
import Address from './Components/Address/Address';
import Order from './Components/Order/Order';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import RestCode from './Components/RestCode/RestCode';
import ResetPass from './Components/ResetPass/ResetPass';



let routres = createHashRouter([
  {
    path: '/', element: <Layout />, children: [
      { index: true, element: <Home />},
      { path: 'login', element: <Login /> },

      { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },

      { path: 'products', element: <ProtectedRoute><Products /> </ProtectedRoute> },
      { path: 'brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },

      { path: 'cart', element: <ProtectedRoute><Cart /> </ProtectedRoute> },
      { path: 'address', element: <ProtectedRoute><Address /> </ProtectedRoute> },
      { path: 'allorders', element: <ProtectedRoute><Order /> </ProtectedRoute> },


      { path: 'productdetails/:id', element: <ProtectedRoute><ProductDetails /> </ProtectedRoute> },


{path:'forgetpassword' ,element:<ForgetPassword/>},
{path:'resetcode' ,element:<RestCode/>},
{path:'ResetPass' ,element:<ResetPass/>},

// {path:'resetpassword' ,element:<ResetPssword/>},




      { path: 'register', element: <Register /> },

      { path: 'profile', element: <ProtectedRoute><Profile /> </ProtectedRoute> },

      { path: '*', element: <NotFound/> }
    ]

  }
])

function App() {
 



  return <RouterProvider router={routres}></RouterProvider>



}

export default App;
