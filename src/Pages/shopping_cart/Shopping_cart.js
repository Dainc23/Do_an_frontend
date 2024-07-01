import React, { useContext } from 'react';
import Header from '../../Components/header1/Header';
import Footer from '../../Components/footer/Footer';
import './shopping_cart.css';
import { Button, Table } from 'reactstrap';
import { AppContext } from '../../AppContext';
import lua from '../../Img/lua.png'
import { Link } from 'react-router-dom';
import returnicon from '../../Img/return icon.svg'
import visa from '../../Img/PhuongThucThanhToan/visa.jpg'
import mastercard from '../../Img/PhuongThucThanhToan/mastercard.jpg'
import stripe from '../../Img/PhuongThucThanhToan/stripe.jpg'
import palpay from '../../Img/PhuongThucThanhToan/Paypal.jpg'
import woo from '../../Img/PhuongThucThanhToan/Woo.jpg'
import applePay from '../../Img/PhuongThucThanhToan/applePay.jpg'
import googlePay from '../../Img/PhuongThucThanhToan/googlePay.png'
import jcb from '../../Img/PhuongThucThanhToan/JCB.jpg'
const ShoppingCart = () => {
    const { cart,updateSl } = useContext(AppContext)
    return (
        <div>
            <Header />
            <main className='container'>
                <div className='step_shopping'>
                    <div className='step_1'>
                        <span className='number_step'>1</span>
                        <p className='name_step'>My cart</p>
                    </div>
                    <div className='line_step'></div>
                    <div className='step_2'>
                        <span className='number_step'>2</span>
                        <p className='name_step'>shipping detail</p>
                    </div>
                    <div className='line_step'></div>
                    <div className='step_3'>
                        <span className='number_step'>3</span>
                        <p className='name_step'>Completed</p>
                    </div>
                </div>
                <section className='Shopping_Cart'>
                    <h1>Shopping Cart</h1>
                    <div className='content_cart'>
                        <div className='cart_detail'>
                            <div className='banner_discount'>
                                <div className='content_discount'><img src={lua}></img>
                                    <p>Congratulations!  Your order qualifies for Free domestic shipping! (Excludes international)</p>
                                </div>
                                <button><i class="fa-solid fa-xmark"></i></button>

                            </div>
                            <Table
                            >
                                <thead>
                                    <tr>

                                        <th>
                                            Product
                                        </th>
                                        <th>
                                            Quality
                                        </th>
                                        <th>
                                            Subtotal
                                        </th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            <th className='anhVaten' scope='row'><img src={item.img}></img>
                                                <div className='ten'>
                                                    <p>{item.name}</p>
                                                    <p>${item.cost}.00</p>
                                                    <p className='infor_size'>Color: gray // Size: M</p>
                                                </div>

                                            </th>


                                            <td>
                                                <div className='update_number'>
                                                    <Button onClick={updateSl(item.id,-1)}><i class="fa-solid fa-minus"></i></Button>
                                                    <p>{item.Sl}</p>

                                                    <Button onClick={updateSl(item.id,1)} ><i class="fa-solid fa-plus"></i></Button>
                                                </div>

                                            </td>
                                            <td className='subTotal'><p>{item.cost}</p></td>
                                            <td><Button className='remove'><i className='fa-solid fa-trash'></i></Button></td>

                                        </tr>
                                    ))}



                                </tbody>
                            </Table>
                            <div className='button_linkShopping'>
                                <Link className='ask'><img src={returnicon}></img>10-day return available with no question asks!</Link>
                                <Link to='/Products' className='continue'>Continue Shopping <i class="fa-solid fa-angle-right"></i></Link>
                            </div>

                        </div>
                        <div className='Cart_Total'>
                            <h3>Cart Total</h3>
                            <div className='first_cost'>
                                <div className='row_cost'>
                                    <p>Your cart</p>
                                    <p>$123,05</p>
                                </div>
                                <div className='row_cost'>
                                    <p>Discount</p>
                                    <p>0</p>
                                </div>
                                <div className='row_cost'>
                                    <p>Sale tax</p>
                                    <p>$15.00</p>
                                </div>
                            </div>
                            <div className='second_cost'>
                                <div className='box'>
                                <div>  <input id='Freeshipping' type='radio' name='shipping'></input>
                                    <label for='Freeshipping'>Freeshipping</label></div>
                                    <p>$15.00</p>
                                </div>
                                <div className='box'>
                                    <div><input id='Local_pickup' type='radio' name='shipping'></input>
                                    <label for='Local_pickup'>Local pickup</label></div>
                                    <p>$00.00</p>
                                </div>
                                <div className='box'>
                                <div> <input id='Flat' type='radio' name='shipping'></input>
                                    <label for='Flat'>Flat rate Shipping
                                        to CA</label></div>
                                        <p>$20.00</p>
                                </div>
                             
                            </div>
                            <select className='select_discount' >
                                <option> Select Promotional code</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                            <div className='total'>
                                <p>Order total</p>
                                <p>$1336,05</p>
                            </div>
                            <Link className='btn_procees'>Proceed to Checkout</Link>
                            <div className='cachThanhtoan'>
                                <p>We Guaranteed Safe Checkout:</p>
                                <div className='diachiThanhtoan'>
                                    <img src={visa}></img>
                                    <img src={mastercard}></img>
                                    <img src={palpay}></img>
                                    <img src={woo}></img>
                                    <img src={applePay}></img>
                                    <img src={googlePay}></img>
                                    <img src={jcb}></img>
                                    <img src={stripe}></img>
                                    

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ShoppingCart;
