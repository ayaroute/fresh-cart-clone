import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";



export let CartContext = createContext();

export default function CartContextProvider(props) {



    let headers = { token: localStorage.getItem('userToken') }

    function addToCart(id) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: id }, { headers })
            .then((response) => response).catch((error) => error)

    }

    function getLoggedUserCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers })
            .then((response) => response).catch((error) => error)

    }

    function removeCartItem(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
            , { headers })
            .then((response) => response)
            .catch((error) => error)

    }




    function updateCartItem(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`
            , { count }, { headers })
            .then((response) => response)
            .catch((error) => error)

    }




    function onlinePayment(cardId, url, values) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cardId}?url=${url}`,
            { shippingAddress: values }, { headers })
            .then((response) => response)
            .catch((error) => error)

    }

const [cardId,setCartId]=useState(null);
async function  getCart(){

let {data}=await getLoggedUserCart();
setCartId(data?.data._id);
console.log(data?.data._id)

}



useEffect(()=>
{
    getCart();
},[]);







    return <CartContext.Provider value={{cardId, addToCart, getLoggedUserCart, removeCartItem, updateCartItem, onlinePayment }}>

        {props.children}

    </CartContext.Provider>



}

