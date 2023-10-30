import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserContextProvider from './Context/UserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import CartContextProvider from './Context/CartContext';
import { Toaster } from 'react-hot-toast';



const root = ReactDOM.createRoot(document.getElementById('root'));
let queryClient=new QueryClient();
root.render(

<CartContextProvider>
<QueryClientProvider client={queryClient}>
  <UserContextProvider>
 <App />
  </UserContextProvider>
  <ReactQueryDevtools initialIsOpen="false" position='top right'></ReactQueryDevtools>
  </QueryClientProvider>
<Toaster/>
</CartContextProvider>
  
   
);

