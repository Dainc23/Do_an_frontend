import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import CardProduct from '../../Components/card_product/Card_product';
import './home.css';
import axios from 'axios';

const Home = () => {
    const [product, setProduct] = useState(null)
    function getData() {
        const url = "https://661b930865444945d04fca10.mockapi.io/ps"
        axios.get(url)
            .then(function (res) {
                setProduct(res.data)

            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(product)
    return (
        <div>
            <Header />
            <div className='body'>
                <div className='banner'></div>
                <div className='container'>
                    <div className='row'>
                        {product != null && product.slice(0, 8).map((item, index) => (
                           
                                <CardProduct ite={item} key={index} />
                            

                        )
                            
                                
                                    
                                
                            
                        
                            

                        )}
                    </div>
                </div>
            </div>



            <Footer />

        </div>
    );
}

export default Home;
