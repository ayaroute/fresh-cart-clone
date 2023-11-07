
    import React from 'react'
    import notfound from'../../assets/images/error.svg'
    import { Helmet } from 'react-helmet'
    
    export default function NotFound() {
      return (
        <div>
          <Helmet>
                <title> 404 Not Found </title>
            </Helmet>
          <img src={notfound} className='w-50 m-auto d-block py-5' alt="notFound" />
          </div>
      )
    }
    
    
    