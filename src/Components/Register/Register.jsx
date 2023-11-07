import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Register() {
  let navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function submitRegister(values) {
    setisLoading(true);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .catch((err) => {

        setisLoading(false);
        seterror(err.response.data.message)
      })



    if (data.message === 'success') {
      setisLoading(false);
      navigate('/login');

    }
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'min length is 2 char').max(7, 'max is 10').required('name is required'),
    email: Yup.string().required('email is required').email('email not valid'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password first letter capital').required('password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')]).required('repassworsd is required'),
    phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/, 'not match').required('phone is required')
  })





  let formik = useFormik({



    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''

    },
    validationSchema,
    onSubmit: submitRegister
  })


  return <>
    <div className="container">
      <form className='w-75 mx-auto my-5' onSubmit={formik.handleSubmit}>
        {error !== null ? <div className='alert alert-danger'>{error}</div> : ''}
        <h2>Register Now:</h2>


        <label htmlFor="name">name:</label>
        <input type="text" className='form-control mb-3' id='name' name='name' onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} />
        {formik.errors.name && formik.touched.name ? <p className='alert alert-danger'>{formik.errors.name}</p> : ''}



        <label htmlFor="email">email:</label>

        <input type="email" className='form-control mb-3' id='email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.email && formik.touched.email ? <p className='alert alert-danger'>{formik.errors.email}</p> : ''}



        <label htmlFor="password">password:</label>

        <input type="password" className='form-control mb-3' id='password' name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.password && formik.touched.password ? <p className='alert alert-danger'>{formik.errors.password}</p> : ''}



        <label htmlFor="rePassword">rePassword:</label>

        <input type="password" className='form-control mb-3' id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.rePassword && formik.touched.rePassword ? <p className='alert alert-danger'>{formik.errors.rePassword}</p> : ''}

        <label htmlFor="phone">Phone:</label>
        <input type="tel" className='form-control mb-3' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.errors.phone && formik.touched.phone ? <p className='alert alert-danger'>{formik.errors.phone}</p> : ''}



        {isLoading ? <button type="button" className='btn bg-main text-white mt-2'>
          <i className='fas fa-spinner fa-spin'></i> </button> :
          <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white mt-2'>Register</button>

        }







      </form>
    </div>


  </>
}
