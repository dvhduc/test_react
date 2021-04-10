import React from 'react';
import { Card, Button, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

function Product(props) {
    const {b}=props;

    return (
        <Card>
            <CardImg top width="100%" src="https://cdn.tgdd.vn/Products/Images/42/228736/Slider/iphone-12-128gb-281120-1020380.jpg" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{b.name}</CardTitle>
                <CardText>{b.price}</CardText>
                <Button outline color="success">Giỏ hàng</Button> {" "}
                <Button outline color="info">Mua hàng</Button>
            </CardBody>
        </Card>
    );

}

export default Product;