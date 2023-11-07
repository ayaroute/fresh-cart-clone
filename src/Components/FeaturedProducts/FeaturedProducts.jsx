import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';





export default function FeaturedProducts() {

    let {addToCart}=useContext(CartContext);


async function addProductToCart(id)
{
let response=await addToCart(id);
if(response.data.status  ==='success')
{
toast.success('product is add to cart',{
    duration: 4000,
  position: 'top-center',

})
}
else{
    toast.error('product not add to cart')

}



}



function getFeaturedProducts()
{
return axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
}
let {isLoading , data}=useQuery('featuredProducts',getFeaturedProducts);
console.log(data?.data.data);



    // const [products, setProducts] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);


    // async function getFeaturedProducts() {
    //     setIsLoading(true);
    //     let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
    //     setProducts(data.data);
    //     setIsLoading(false);
    // }

    // useEffect(() => {

    //     getFeaturedProducts();
    // }, [])


    return <>


{isLoading?<div className='w-100 d-flex justify-content-center py-4 '>

 <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

</div>:


<div className='container'>
<div className='row'>
    <h4>Featured Products</h4>
    {data?.data.data.map((product) => <div key={product.id} className='col-md-2' >


<div className='product py-3 px-2 cursor-pointer'>
<Link to={`/productdetails/${product.id}`}>

            <img className='w-100' src={product.imageCover} alt={product.title} />
            <span className='text-main font-sm fw-bolder'>{product.category.name}</span>
            <h3 className='h6'>{product.title.split(" ").slice(0, 2).join(' ')}</h3>
            <div className='d-flex justify-content-between mt-2'>  <spna>{product.price} EGP</spna>
                <span> <i className='fas fa-star rating-color'></i> {product.ratingsAverage}</span>
            </div>

            </Link>

            <button onClick={()=>addProductToCart(product.id)}      className='btn bg-main text-white w-100 btn-sm'> add to cart</button>


        </div>



    </div>)}
</div>
</div>




}




    </>
}