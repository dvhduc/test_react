import React from 'react';
import { Card, Button, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

function Product(props) {
    const { b } = props;
    function onAddToCart(){
        alert(b.name + ' - ' + b.price);
    }
    return (
        <Card>
            <CardImg top width="120%" src={b.image} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{b.name}</CardTitle>
                <CardText>{b.price}</CardText>
                <Button outline color="success">Giỏ hàng</Button> {" "}
                <Button outline color="info" onClick= {onAddToCart}>Mua hàng</Button>
            </CardBody>
        </Card>
        
    );

}

export default Product;