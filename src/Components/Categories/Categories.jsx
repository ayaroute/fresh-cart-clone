import axios from 'axios'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'


export default function Categories() {


  function getCategory() {

    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  }


  let {data , isError , isLoading , isFetched} = useQuery('category' , getCategory)

  console.log(data?.data.data);



  return (
    <>

    <Helmet>
      <meta charSet="utf-8" />
      <title>Fresh Cart Categories page</title>
    
    </Helmet>
    
    
    <h1 className='text-main'>All Categories</h1>

{isLoading ?  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>




: <div className='container my-5'>



<div className='row gy-4'>    

{data?.data.data.map((category) => 
  
  
  <div key={category._id} className="col-lg-3 col-md-4">
  <div className="category p-2">
  <Link to={`categories/${category._id}`}>
       <img src={category.image} className='w-100' height={300}  alt="" />
       <h3 className='h5 mt-4 text-main'>{category.name}</h3>
  </Link>
  </div>
</div>


  ) }
</div>
</div>}




    
     





    </>
  )
}
