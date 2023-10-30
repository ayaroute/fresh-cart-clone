import React from 'react'
import slide1 from '../../assets/images/slider-image-1.jpeg';
import slide2 from '../../assets/images/slider-image-2.jpeg';

import slide3 from '../../assets/images/slider-image-3.jpeg';
import Slider from "react-slick";
import blog1 from '../../assets/images/grocery-banner.png';
import blog2 from '../../assets/images/grocery-banner-2.jpeg';







export default function MainSlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000
        
        
      };
  return<>
  <div className="row gx-0 p-4">
<div className="col-md-8">
<Slider {...settings} >

    <img src={slide1} height={400} className='w-100' alt="img" />
    <img src={slide2}  height={400} className="w-100" alt="img" />
    <img src={slide3}  height={400} className="w-100" alt="img" />

</Slider>
</div>

<div className='col-md-4'>

<img src={blog1}  height={200}  className='w-100' alt=''></img>
<img src={blog2} height={200} className='w-100' alt=''></img>

</div>

  </div>
  
           </>
}
