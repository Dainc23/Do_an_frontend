import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import bag_color from './Img/Img_products/Bag_color.jpg';
import belt from './Img/Img_products/Belt.jpg';
import flag from './Img/Img_products/Flag.jpg';
import glass from './Img/Img_products/Glass.jpg';
import hat_red from './Img/Img_products/Hat_red.jpg';
import hat from './Img/Img_products/hat.jpg';
import shirt from './Img/Img_products/images.jpg';
import Tshirt_gray from './Img/Img_products/T-shirt_gray.jpg';
import Tshirt_orange from './Img/Img_products/T-shirt_orange.jpg';

export const AppContext = createContext({})
export function AppProvider({ children }) {
    const [product, setProduct] = useState(null)
    const [cart, serCart] = useState([])

    const imgProducts = [{
        id: 1,
        img: bag_color
    },
    {
        id: 2,
        img: belt
    },
    
    {
        id: 3,
        img: glass
    },
    {
        id: 4,
        img: hat_red
    },
    {
        id: 5,
        img: hat
    },
    {
        id: 6,
        img: shirt
    },
    {
        id: 7,
        img: Tshirt_gray
    },
    {
        id: 8,
        img: Tshirt_orange
    },
    ]
    function getData() {
        const url = `https://661b930865444945d04fca10.mockapi.io/ps`
        axios.get(url)
            .then(function (res) {
               const Api_data= res.data.map((item,index)=>({...item,img:imgProducts[index % imgProducts.length].img}))
               setProduct(Api_data)

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
        serCart(JSON.parse(localStorage.getItem("Cart")))
    }, [])

    const addCart = (id) => {
        const pro = product.find(item => item.id == id)
        const index = cart.findIndex(item => item.id == id)
        if (index >= 0) {
            const newCart = cart
            newCart[index]['Sl']++
            localStorage.setItem("Cart",JSON.stringify([...cart]))
        }
        else {
            serCart([...cart, { ...pro, Sl: 1 }])
            localStorage.setItem("Cart",JSON.stringify([...cart]))
        }

        console.log(cart)
    }

    const removeByid = (id) => {
        serCart(cart.filter(item => item.id != id))
        localStorage.setItem("Cart",JSON.stringify(cart.filter(item=>item.id !=id)))
    }
    const updateSl = (id, num) => {
        serCart(cart.map(item => ((item.id == id) && !(item.Sl == 1 && num == -1)) ? { ...item, Sl: item.Sl + num } : item))

    }
    return (
        <AppContext.Provider value={{ product, addCart, cart, removeByid, updateSl }} >
            {children}
        </AppContext.Provider>
    )
}

