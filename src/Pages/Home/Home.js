import React from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import CardProduct from '../../Components/card_product/Card_product';
import './home.css';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='body'>
                <div className='banner'></div>
                <div className='container'>
                    <div className='row'>
                        <div className='box1 col-3'><CardProduct /></div>
                        <div className='col-3'><CardProduct /></div>
                        <div className='col-3'><CardProduct /></div>
                        <div className='box4 col-3'><CardProduct /></div>
                        
                    </div>
                    

                </div>
            </div>



            <Footer />

        </div>
    );
}

export default Home;
