import React, {useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import { Col, Container, Input, Label, Row } from 'reactstrap';
import Footer from './components/Footer';
import Table from './components/Table';

function App() {
  const [name, setname] = useState(null);
  
  const item = [
    {
      id: 1,
      name: "Iphone",
      price: "Giá tiền: 100",
      image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
      status: true

    },
    {
      id: 2,
      name: "Samsung",
      price: "Giá tiền: 300",
      image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
      status: true
    },
    {
      id: 3,
      name: "Xiaomi",
      price: "Giá tiền: 400",
      image: "https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-xanh-new-600x600-600x600.jpg",
      status: true
    },
    {
      id: 4,
      name: "Nokia",
      price: "Giá tiền: 50",
      image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/o/nokia-2.4_1_.jpg",
      status: true
    },
  ];

  const test = item.map((a, index) => {
    if (a.status) {
      return <Col key={index} sm="3" className="mt-2">
        <Product b={a} />
      </Col>
    }
  })

  const onAddProduct=() =>{
    console.log(name);
  }
  function handleChange(event){
    setname(event.target.value);
  }
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>
        <Row>
          <Col>
            <div className="card mb-3">
              <Label style={{ backgroundColor: "#32fd0d", padding: "8px 16px", fontWeight: "bold", color: "#1300ff80" }}>Thêm Sản Phẩm</Label>
              <div className="card-body ">
                <h6 className="card-title">Tên sản phẩm</h6>
                <Input className="card-text" onChange={handleChange}></Input>
                <br />
                <p className="btn btn-primary" onClick= { onAddProduct }>Lưu</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {test}
        </Row>
        <Row><Table/></Row>
        <Row><Col className="footer" style={{ textAlign: "right", marginTop: "10px" }}> <Footer /></Col></Row>
      </Container>

    </React.Fragment>
  );
}
export default Table;
