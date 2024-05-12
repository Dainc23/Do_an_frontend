import React from 'react';
import './card_product.css'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import img_product from '../../Img/product.jpg'
const CardProduct = () => {
    return (
        <div>

            <Card
                style={{
                    width: '18rem'
                }}
            >
                <img
                    alt="Sample"
                    src={img_product}
                />
                <div className='status'><p>Hot</p></div>
                <CardBody>

                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        HOODIE
                    </CardSubtitle>
                    <div className='quality'>
                        <div className='star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <p>(123)</p>
                    </div>
                    <CardTitle tag="h5">
                        Hoodie with Logo
                    </CardTitle>
                    <CardText>
                        USD$45.00
                    </CardText>
                    <Button>
                        Add to cart
                    </Button>
                </CardBody>
            </Card>

        </div>
    );
}

export default CardProduct;
