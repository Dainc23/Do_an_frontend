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
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed)
    const [collapsed1, setCollapsed1] = useState(true);
    const toggleNavbar1 = () => setCollapsed1(!collapsed1)
    const [select, setSelect] = useState(true)
    const toggleSelect = () => setSelect(!select)
    


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
                            <div className='Brand_menu'>
                                <Button onClick={toggleSelect} color="link" className='bar'><i class="fa-solid fa-bars-staggered"></i></Button>
                                <NavbarBrand href="/"><div className='logo'><img src={logo}></img></div></NavbarBrand>
                                <Button color="link" className='bar_search'><img src={search1} /></Button>
                                <Nav className="me-auto" >
                                    <NavItem>
                                        <NavLink href="/components/"><p>Home</p></NavLink>
                                    </NavItem>

                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <p>Shop</p>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>Outlet</DropdownItem>
                                            <DropdownItem>Footwear</DropdownItem>
                                            
                                            <DropdownItem>Clothigs</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    <NavItem>

                                        <NavLink href="https://github.com/reactstrap/reactstrap">
                                            <p>Products</p>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">
                                            <p>Blog</p>
                                        </NavLink>
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            <p>Pages</p>
                                            <i class="fa-solid fa-angle-down"></i>
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem>About us</DropdownItem>
                                            <DropdownItem>Contact</DropdownItem>
                                            
                                            <DropdownItem>Reset</DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </div>
                            <div className='header_funtion'>
                                <div>
                                    <div className='input_search'>
                                        <input placeholder='Search...'></input>
                                        <img src={search}></img>
                                    </div>
                                </div>
                                <NavItem className='icon'>
                                    <NavLink><img src={heard}></img></NavLink>
                                    <NavLink><img src={bag}></img><div className='number_cart'><p>2</p></div></NavLink>
                                    <NavLink><img src={user}></img></NavLink>
                                </NavItem>
                            </div>

                        </Navbar>

                    </div>
                </div>
            </div>
            <div className={select ? "menu_select" : "menu_select active"}>
                <div className='container'>
                    <Nav className="list_menu" >
                        <NavItem>
                            <NavLink href="/components/"><p>Home</p></NavLink>
                        </NavItem>

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <p>Shop</p>

                                <NavbarToggler targetId="1" onClick={toggleNavbar} className="fa-solid fa-angle-down" />

                            </DropdownToggle>
                            <Collapse collapseId="1" isOpen={!collapsed} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="/components/">Outlet</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Footwear</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/components/">Clothigs</NavLink>
                                    </NavItem>
                                    
                                </Nav>
                            </Collapse>

                        </UncontrolledDropdown>
                        <NavItem>

                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <p>Products</p>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                <p>Blog</p>
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <p>Pages</p>

                                <NavbarToggler id="2" onClick={toggleNavbar1} className="fa-solid fa-angle-down" />
                            </DropdownToggle>
                            <Collapse targetId="2" isOpen={!collapsed1} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink href="/components/">About us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="https://github.com/reactstrap/reactstrap">
                                            Contact us
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </UncontrolledDropdown>
                    </Nav>

                </div>
                <div className='funtion_bottom'>
                    <NavItem className='icon'>
                        <NavLink><img src={heard}></img></NavLink>
                        <NavLink><img src={bag}></img><div className='number_cart'><p>2</p></div></NavLink>
                        <NavLink><img src={user}></img></NavLink>
                    </NavItem>

                </div>

            </div>
           


        </div>


    );
}

export default Header;
