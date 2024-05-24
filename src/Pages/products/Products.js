
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import './products.css';
import Breadcrumbs from '../../Components/breadcrumb/Breadcrumbs';
import content_banner from '../../Img/Content_banner_productsPage.png'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import grid_3_icon from '../../Img/gird-3.svg';
import list_icon from '../../Img/List.svg';
import { Link } from 'react-router-dom';

import 'rc-slider/assets/index.css';
import RcSlider from '../../Components/rc_slider/Rc_slider';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardProduct from '../../Components/card_product/Card_product';

const Products = () => {
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
    return (
        <div>
            <Header />
            <div className='Breadcrumb container'><Breadcrumbs /></div>
            <div className='banner_products container'>
                <img src={content_banner}></img>
            </div>
            <section className='all_products'>
                <div className='container'>
                    <div className='tilte_funtionTop'>
                        <div className='tilte_With_dropdown'>
                            <div className='tilte'>
                                <h1 >All Products</h1>
                                <h3 className='numberOfproduct'>[12]</h3>
                            </div>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </div>
                        <div className='setting_colum'>
                            <button><img src={grid_3_icon}></img></button>
                            <button><img src={list_icon}></img></button>
                        </div>

                    </div>
                    <div className='filter_products'>
                        <div className='filter'>
                            <div className='Box'>
                                <h3>Catagories</h3>
                                <div className='kind'>
                                    <Link><h4>Tops</h4> <h4>[12]</h4></Link>
                                    <Link><h4>Tops</h4> <h4>[12]</h4></Link>
                                    <Link><h4>Tops</h4> <h4>[12]</h4></Link>
                                    <Link><h4>Tops</h4> <h4>[12]</h4></Link>
                                    <Link><h4>Tops</h4> <h4>[12]</h4></Link>
                                </div>

                            </div>
                            <div className='Box'>
                                <h3>PRICE</h3>
                                <div className='kind'>
                                    < RcSlider />

                                </div>

                            </div>
                            <div className='Box'>
                                <h3>Size</h3>
                                <div className='kind'>
                                    <button>Xs</button>
                                    <button>S</button>
                                    <button>M</button>
                                    <button>L</button>
                                    <button>Xl</button>
                                    <button>2Xl</button>
                                    <button>3Xl</button>
                                </div>

                            </div>
                            <div className='Box'>
                                <h3>Brand</h3>
                                <div className='kind'>

                                    <input type={'checkbox'}></input>
                                    <label>Elle</label>
                                    <input type={'checkbox'}></input>
                                    <label>Elle</label>
                                    <input type={'checkbox'}></input>
                                    <label>Elle</label>
                                    <input type={'checkbox'}></input>
                                    <label>Elle</label>
                                    <input type={'checkbox'}></input>
                                    <label>Elle</label>
                                </div>

                            </div>
                        </div>
                        <div className='products row'>
                            
                                 {product != null && product.map((item, index) => (
                                    <CardProduct ite={item} key={index}/>
                                ))}

                            

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Products;
