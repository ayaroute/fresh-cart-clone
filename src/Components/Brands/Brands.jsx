import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Circles } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'


export default function Brands() {


  function getCategory() {

    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
  }


  let {data , isError , isLoading , isFetched} = useQuery('category' , getCategory)

  console.log(data?.data.data);



  return (
    <>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Fresh Cart Categoies page</title>
    
    </Helmet>
    

    <h1 className='text-main'>All Brands</h1>


{isLoading ?  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> : <div className='container my-5'>

<div className='row gy-4'>    

{data?.data.data.map((brands) => 
  
  
  <div key={brands.id} className="col-lg-3 col-md-6">
  <div className="product p-2">
  <Link to={`categories/${brands.id}`}>
       <img src={brands.image} className='w-100 ' alt="" />
       <h3 className='h5 mt-4 text-main'>{brands.name}</h3>
  </Link>
  </div>
</div>


  ) }
</div>
</div>}




    
     





    </>
  )
}
