import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { Col, Container, Row } from 'reactstrap';

function App() {
  const item = [
    {
      name:"Iphone",
      price:"Giá tiền: 100"
    },
    {
      name:"Samsung",
      price:"Giá tiền: 300"
    },
    {
      name:"1",
      price:"Giá tiền: 400"
    },
    {
      name:"2",
      price:"Giá tiền: 50"
    },
  ];

  const test = item.map((a,index)=>{
      return <Col key={index} sm="3" className="mt-2">
      <Product b={a} />
      
    </Col>
   
  })
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          {test}
          
         
        </Row>
      </Container>

    </React.Fragment>
  );
}
export default App;
