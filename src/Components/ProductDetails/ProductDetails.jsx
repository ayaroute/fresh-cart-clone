import axios from 'axios';
import { param } from 'jquery';
import React from 'react'
import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';



export default function ProductDetails() {
let params=useParams();
function getProductDetails(id)
{
return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
}
let {isLoading,isError , data}=useQuery('productDetails',()=>getProductDetails(params.id));
console.log(data?.data.data);




  return (
    <div className='container'>
            <div className="row align-items-center py-4">
                <Helmet>
                    <meta name='description' content=''/>
<title>{data?.data.data.title}</title>


                </Helmet>
                <div className="col-md-4">
                    <img src={data?.data.data.imageCover} className='w-100' alt={data?.data.data.title} />
                </div>
                <div className="col-md-8">
                    <p>{data?.data.data.title}</p>
                    <p>{data?.data.data.description}</p>
                    <p>{data?.data.data.category.name}</p>
                    <div className="box d-flex justify-content-between">
                        <span className='fw-bolder text-main'>{data?.data.data.price}EGP</span>
                        <span className='fw-bolder text-main'>{data?.data.data.ratingsAverage} <i className='fa-solid fa-star rating-color'></i></span>
                    </div>
                    <button  className='btn bg-main text-white w-100 p-2 mt-2'>Add To Cart</button>
                </div>
            </div>
        </div>
  )
}
