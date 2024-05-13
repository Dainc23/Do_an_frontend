import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import CardProduct from '../../Components/card_product/Card_product';
import './home.css';
import axios from 'axios';
import { Button } from 'reactstrap';
import img_banner from '../../Img/banner.png'


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
                <div className='banner'>
                    <div className='container'>
                        <div className='content_banner'>
                            <div className='content'>
                                <p className='sub_tilte'> New Arrivals</p>
                                <h1 className='tilte'>Perfect Fashions <br/> For Summer</h1>
                                <p className='body_text'>There's nothing like a trend, let's select items to make your
                                    life <br />with a new fashion style!</p>
                                <Button>Explore Now</Button>
                            </div>
                        </div>
                        <img src={img_banner}></img>
                    </div>
                </div>
                <section className='sub_banner'>
                    <div className='container'>
                        <div className='banner1 '>
                            <h3>The oversize favorite <br /> of all time</h3>
                            <p>Take a perfect shape after experiencing our products. 
                               <br /> Let’s try it now!</p>
                                <Button>Shop now</Button>
                        </div>
                        <div className='banner2'>
                            <h3>The oversize favorite <br />  of all time</h3>
                            <p>Take a perfect shape after experiencing our products. 
                            <br />Let’s try it now!</p>
                                <Button>Shop now</Button>
                        </div>
                    </div>
                </section>
                <div className='container'>
                    <div className='row'>
                        {product != null && product.slice(0, 8).map((item, index) => (
                            <CardProduct ite={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>



            <Footer />

        </div>
    );
}

export default Home;
