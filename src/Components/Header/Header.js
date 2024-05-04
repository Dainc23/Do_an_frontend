import React, { useState } from 'react';
import './header.css'
import { Link, NavLink } from 'react-router-dom';
import img1 from '../../Img/US.png'
import logo from '../../Img/logo.png'
import search1 from '../../Img/search1-icon.svg'
import search from '../../Img/search-icon.svg'
import bag from '../../Img/bag-icon.svg'
import heard from '../../Img/heard-icon.svg'
import user from '../../Img/user-icon.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style.css'
import { Button, Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, Navbar, NavbarBrand, NavbarText, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className='fixed'>
            <div className='header'>
                <div className='top_infor'>
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
                    </div>
                </div>
                
                <div className='container'>
                <div>
                <Navbar >
                    <NavbarBrand href="/"><div className='logo'><img src={logo}></img></div></NavbarBrand>
                    <Nav className="me-auto" >
                            <NavItem>
                                <NavLink className='link' href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                            <div className='input_search'>
                                <input placeholder='Search...'></input>
                                <img src={search}></img>
                            </div>
                            </NavItem>
                            <NavItem className='icon'>
                                <NavLink><img src={heard}></img></NavLink>
                                <NavLink><img src={bag}></img><div className='number_cart'><p>2</p></div></NavLink>
                                <NavLink><img src={user}></img></NavLink>
                            </NavItem>
                        </Nav>
                    <NavbarToggler className='button_toggle' onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>Option 1</DropdownItem>
                                    <DropdownItem>Option 2</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Reset</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                        <NavbarText>Simple Text</NavbarText>
                    </Collapse>
                </Navbar>
            </div>

                    <div className='Nav'>
                        <div className='logo-menu'>
                            <Button color="link" className='nav'><i class="fa-solid fa-bars-staggered"></i></Button>
                            <div className='logo'><img src={logo}></img></div>
                            <Button color="link" className='search'><img src={search1}></img></Button>
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
                                <img src={search}></img>
                            </div>
                            <div className='icon'>
                                <Link className='heard'><img src={heard}></img></Link>
                                <Link className='bag'><img src={bag}></img><div className='number_cart'><p>2</p></div></Link>
                                <Link><img src={user}></img></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='nav_bar'>
                <div className='container'>
                    <ul className='list_menu'>
                        <Link><p>Home</p></Link>
                        <Link><p>Shop</p><i class="fa-solid fa-angle-down"></i></Link>
                        <Link><p>Products</p></Link>
                        <Link><p>Blog</p></Link>
                        <Link className='page'><p>Pages</p><i class="fa-solid fa-angle-down"></i></Link>
                    </ul>


                </div>
            </div>

        </div>
    );
}

export default Header;
