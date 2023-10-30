import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext';



export default function Address() {

    let {onlinePayment ,cardId} =useContext(CartContext)
  async  function handleAdressSubmit(values)
    {
        let response =await  onlinePayment(cardId,'http://localhost:3000',values);
        window.location.href=response?.data.session.url;
   
}
  
     

    let formik =useFormik({
        initialValues:{
            details:'',
            phone:'',  
            city:''
        },

onSubmit:handleAdressSubmit

    }
    )




  return <>
  <div className="container">
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="details">Details:</label>
 <input type="text" className='form-control mb-3' id='details' name='details' onBlur={formik.handleBlur} value={formik.values.details} onChange={formik.handleChange} />
  
 <label htmlFor="phone">Phone :</label>
 <input type="tel" className='form-control mb-3' id='phone' name='phone' onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} />
  
 <label htmlFor="city">City:</label>
 <input type="text" className='form-control mb-3' id='city' name='city' onBlur={formik.handleBlur} value={formik.values.city} onChange={formik.handleChange} />
  

<button type='submit' className=' btn text-white bg-main '> Pay Now</button>
    </form>
  
  </div>
  
  
 
  
  </>
}
