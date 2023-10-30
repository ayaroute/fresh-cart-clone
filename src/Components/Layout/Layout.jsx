import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Offline, Online } from "react-detect-offline";



export default function Layout() {





  return <>
  <Navbar/>
  <div className='container'>

  <Outlet/>

  </div>
  <div>
    <Offline>
      <div className='network'>
<i className='fas fa-wifi '></i> You Are Offline 


      </div>
      
      Only shown offline (surprise!)</Offline>
  </div>
  <Footer/>
  
  
  </>
}
