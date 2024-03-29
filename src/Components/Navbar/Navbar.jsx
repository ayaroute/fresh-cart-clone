import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg';
import { UserContext } from '../../Context/UserContext';

export default function Navbar() {

const {userToken,setUserToken}=useContext(UserContext);
console.log(userToken)
let navigate =useNavigate();
function LogOut(){
  localStorage.setItem('userToken',null);
  setUserToken(null);
  navigate('./login');
}






  return <>
  
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> 
    <img src={logo} alt="Freash Cart Logo"/>
     </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">


      {userToken ? <>
       <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/products">Products</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/categories">Categories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cart">Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/brands">Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">profile</Link>
        </li>
      </>  :""}
     
       
       
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item d-flex align-items-center">
            <i className='fab fa-facebook mx-2'></i>
            <i className='fab fa-twitter mx-2'></i>
            <i className='fab fa-instagram mx-2'></i>
            <i className='fab fa-linkedin mx-2'></i>
            <i className='fab fa-youtube mx-2'></i>
             </li>
     

     {userToken ? <> <li className="nav-item">
     <span onClick={()=> LogOut()}      className="nav-link cursor-pointer" >Logout</span>
     </li>
  
     </>: <>
     <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
     </li>
     <li className="nav-item">
       <Link className="nav-link" to="/register">Register</Link>
     </li>
     </>    
}      
   
    
    
    
   </ul>
     
    </div>
  </div>
</nav>  
  
  </>




}



