import React from 'react';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './products.css';
import Breadcrumbs from '../../Components/breadcrumb/Breadcrumbs';

const Products = () => {
    return (
        <div>
            <Header />
            <div className='Breadcrumb container'>
                <Breadcrumb listTag="div">
                    <BreadcrumbItem
                        href="#"
                        tag="a"
                    >
                        Home
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        href="#"
                        tag="a"
                    >
                        Library
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        href="#"
                        tag="a"
                    >
                        Data
                    </BreadcrumbItem>
                    <BreadcrumbItem
                        active
                        tag="span"
                    >
                        Bootstrap
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
            <Breadcrumbs />
            <Footer />
        </div>
    );
}

export default Products;
