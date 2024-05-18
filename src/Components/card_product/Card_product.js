import React from 'react';
import './card_product.css'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import img_product from '../../Img/product.jpg'
const CardProduct = (pros) => {
    const{ite}=pros;

    return (
        <div className='col-xl-3 col-lg-4 col-md-6 col-12'>



            <Card
            
                style={{
                    width: '18rem'
                }}
            >
                <img alt="Sample" src={img_product} />
                <div className={ite.status?"status":"statusactive"}>{ite.status}</div>
                <CardBody>

                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {ite.collection}
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
                        {ite.name}
                    </CardTitle>
                    <CardText>
                        USD${ite.cost}.00
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
