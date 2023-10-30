import React from 'react'
import axios from 'axios';
import { useQuery } from 'react-query';
import Slider from "react-slick";




export default function CategorySlider() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,

    };

    function getCategories(id) {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
    }
    let { isLoading, isError, data } = useQuery('categoryslider', getCategories);
    console.log(data?.data.data);


    return <>

        <div className='py-4'>

 {data?.data.data ? <Slider {...settings} >

                {data?.data.data.map((category) => <img key={category._id} height={200} alt='img' className='w-h-100' src={category.image}></img>)}
            </Slider> : ''}




        </div>
    </>


}
