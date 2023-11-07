import axios from 'axios'
import React from 'react'
import { useQuery } from "react-query";
import { Helmet } from 'react-helmet';
import { Circles } from 'react-loader-spinner';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';


export default function Products() {
  
  function getProductAll() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  const { data, isLoading } = useQuery(
    "products",
    getProductAll
   
  );

  
  
  return <>
  <Helmet>
      <meta charSet="utf-8" />
      <title>Fresh Cart Products  page</title>
    
    </Helmet>
    <h1 className='text-main'>All Products</h1>
<FeaturedProducts/>

</>
}
