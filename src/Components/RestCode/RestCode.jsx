import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function RestCode() {

  let [isLoading, setisLoading] = useState(false);
  let [error, setError] = useState(null);

  let navigate = useNavigate();



  async function RestCode(values) {

    setisLoading(true)
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`, values).catch((err) => {
      setisLoading(false);
      setError(err.response.data.message)

    })



    if (data.status == "Success") {

      setisLoading(false)
      navigate('/ResetPass')



    }

  }
  let validationSchema = Yup.object({
    resetCode: Yup.string().matches(/^[0-9]+$/, "inviled code").required()
  });

 let formik = useFormik({
    initialValues: {
      resetCode: "",
    },
    validationSchema,
    onSubmit: RestCode
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Reset Code page</title>
      </Helmet>

      <div className=" container">
        {error ? <div className="alert alert-danger">{error}</div>
          : ''}
 <form
          className="my-5 w-75 mx-auto  min-vh-100"
          onSubmit={formik.handleSubmit}
        >
          <h3 className="h5 my-3 d-flex justify-content-center align-items-center ">Write Your Code :</h3>

          <input
            className="form-control mb-3"
            name="resetCode"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your Code "
          />
          {formik.errors.resetCode && formik.touched.resetCode ? (
            <p className="alert alert-danger">{formik.errors.resetCode}</p>
          ) : (
            ""
          )}

         {isLoading ? (<button type="button" className="btn btn-success  mx-auto d-block">
            <i className="fa-solid fa-spinner fa-spin"></i>
          </button>) : (

            <div className="d-flex align-items-center">
              <button
                disabled={!(formik.dirty && formik.isValid)}
                type="submit"
                className="btn bg-main mx-auto text-light my-3"
              >
                Verfiy Code
              </button>
            </div>

          )}


        </form>
      </div>
    </>
  );
}
