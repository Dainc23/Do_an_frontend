import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import img1 from '../../Img/US.png'
import logo from '../../Img/logo.png'
import search from '../../Img/search-icon.svg'
import bag from '../../Img/bag-icon.svg'
import heard from '../../Img/heard-icon.svg'
import user from '../../Img/user-icon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
            <div className='infor'>
                <p className='infor_left'>We support 24/7 via hotline:<span className='bold'>+1 3210 9876 345</span> </p>
                <div className='infor_right'>
                    <div className='icon'>
                        <Link><i class="fa-brands fa-facebook"></i></Link>
                        <Link><i class="fa-brands fa-instagram"></i></Link>
                        <Link><i class="fa-brands fa-tiktok"></i></Link>
                        <Link><i class="fa-brands fa-youtube"></i></Link>
                    </div>
                    <div className='line'></div>
                    <div className='langues'>
                        <img src={img1}></img>
                        <p>English</p>
                        <Link><i class="fa-solid fa-angle-down"></i></Link>

                    </div>

                </div>
            </div>
            <div className='Nav'>
                <div className='logo-menu'>
                <div className='logo'><img src={logo}></img></div>
                <div className='menu'>
                    <ul>
                        <Link><p>Home</p></Link>
                        <Link><p>Shop</p><i class="fa-solid fa-angle-down"></i></Link>
                        <Link><p>Products</p></Link>
                        <Link><p>Blog</p></Link>
                        <Link><p>Pages</p><i class="fa-solid fa-angle-down"></i></Link>
                    </ul>
                </div>
                </div>
                <div className='funtion_left'>
                    <div className='input_search'>
                        <input placeholder='Search...'></input>
                        <img  src={search}></img>
                    </div>
                    <div className='icon'>
                        <Link className='heard'><img src={heard}></img></Link>
                        <Link className='bag'><img  src={bag}></img><div className='number_cart'><p>2</p></div></Link>
                        <Link><img src={user}></img></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Header;
