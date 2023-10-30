import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import Address from '../Address/Address';


export default function Cart() {
  let { getLoggedUserCart, removeCartItem,updateCartItem,addToCart} = useContext(CartContext);

  const [cartDetails, setCartDetails] = useState(null);
  async function getCart() {
    let { data } = await getLoggedUserCart();
    setCartDetails(data);
  }
  async function removeItem(id) {
    let { data } = await removeCartItem(id);
    setCartDetails(data);
  }

  

  

  async function updateItem(id,count) {
    let { data } = await updateCartItem(id,count);
    setCartDetails(data);
  }


  useEffect(() => {
    getCart();
  }, []);

  return <>
    {cartDetails ? <div className='w-75 my-4 mx-auto p-3 bg-main-light' >
      <h3>Shopping Cart </h3>
      <h4 className='h6 text-main fw-bold'> Cart Items :{cartDetails.numOfCartItems}</h4>
      <h4 className='h6 text-main fw-bold'>Total Cart price : {cartDetails.data.totalCartPrice} EGP</h4>
      {cartDetails.data.products.map((product) => <div key={product.product.id} className='row border-bottom py-2 px-2'>
        <div className="col-md-1">
          <img className='w-100' src={product.product.imageCover} alt='' />
        </div>
        <div className="col-md-11">
          <div className='d-flex justify-content-between align-items-center' >
            <div>
              <h3 className='h6'>{product.product.title.split(' ').slice(0, 3).join(' ')} </h3>
              <h6 className='text-main '>price :{product.price} EGP</h6>
            </div>
            <div>
              <button onClick={()=>updateItem(product.product.id,product.count + 1)} className='btn brdr-main p-1'> + </button>
              <span className='mx-2'>{product.count}</span>
              <button  onClick={()=>updateItem(product.product.id,product.count - 1)} className='btn brdr-main p-1'> - </button>
            </div>

          </div>
          <button onClick={()=>removeItem(product.product.id)} className='btn p-0'> <i className='text-danger font-sm fas fa-trash-can p-1'></i>Remove </button>

        </div>




      </div>
      )}
<Link  to={'/address'} className='btn m-2 text-white bg-main w-25'>Online Payment</Link>
<Link className='btn m-2 text-white bg-main w-25'>cash Payment</Link>






    </div> : <section id='loading' className='d-flex justify-content-center p-4 align-items-center'>
    <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>

</section>}



 </>

}
