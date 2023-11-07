import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {UserContext} from '../../Context/UserContext';
              


export default function Login() {
  let {UserToken,setUserToken}=useContext(UserContext);
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

useEffect(()=>{

  if(UserToken){
navigate("./")
  }
  

},[]);



  async function submitLogin(values) {
    setisLoading(true);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values)
      .catch((err) => {

        setisLoading(false);
        seterror(err.response.data.message)
      })



    if (data.message === 'success') {
      setisLoading(false);
      localStorage.setItem('userToken', data.token);
      setUserToken(data.token);
      navigate('/');

    }
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('email is required').email('email not valid'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password is invalid').required('password is required'),
  })





  let formik = useFormik({



    initialValues: {
      email: '',
      password: '',

    },
    validationSchema,
    onSubmit: submitLogin
  })


  return <>
    <div className="container">
      <form className='w-75 mx-auto my-5' onSubmit={formik.handleSubmit}>
        {error !== null ? <div className='alert alert-danger'>{error}</div> : ''}

        <h3>Login Now</h3>



        <label htmlFor="email">email:</label>

        <input type="email" className='form-control mb-3' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p> : ''}



        <label htmlFor="password">password:</label>

        <input type="password" className='form-control mb-3' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password}</p> : ''}





<Link to='/forgetpassword' >Forget Password ..?</Link>
        {isLoading ? <button type="button" className='btn bg-main text-white mt-2'>
          <i className='fas fa-spinner fa-spin'></i> </button> :
          <div>
            <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white mt-2'>Login</button>
            <Link className='btn btn-default' to={'/register'}>Register Now</Link>

          </div>


        }







      </form>
    </div>


  </>
}
