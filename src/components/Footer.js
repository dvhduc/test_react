import React from 'react';
import { Button, Col, Container, Row } from 'reactstrap';

function Footer() {
    function onClick(){
        alert('Test')
    }
    return (
        <div>
            <Button outline color="primary" onClick={onClick}>Click me!!</Button>{' '}
        </div>


    )
}
export default Footer;
