import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';

import { Col, Container, Row } from 'reactstrap';
import Footer from './components/Footer';


function App() {

  const [isActive, setisActive] = useState(true);
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Iphone",
      price: "10.000.000",
      image: "https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg",
      status: true

    },
    {
      id: 2,
      name: "Samsung",
      price: "12.000.000",
      image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg",
      status: true
    },
    {
      id: 3,
      name: "Xiaomi",
      price: "4.000.000",
      image: "https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-xanh-new-600x600-600x600.jpg",
      status: true
    },
    {
      id: 4,
      name: "Nokia",
      price: "5.000.000",
      image: "https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/o/nokia-2.4_1_.jpg",
      status: true
    },
  ]);

  const test = products.map((a, index) => {
    let result = '';
    if (a.status) {
      result = <tr key={index}>
        <th scope="row">{index}</th>
        <td>{a.name}</td>
        <td>
          <span className="label label-success">{a.price} VNĐ</span>
        </td>
      </tr>
    }
    return result;
  })

  function onState() {
    setisActive(!isActive);    
  }


  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>

        <Row>
          <table className="table table-bordered" border="{&quot;2px&quot;}">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              {test}
            </tbody>
          </table>


        </Row>
        <button type="button" className="btn btn-warning" onClick={onState}>
          Active: {isActive === true ? 'true' : 'false'}
        </button>

        <Row><Col className="footer" style={{ textAlign: "right", marginTop: "10px" }}> <Footer /></Col></Row>
      </Container>

    </React.Fragment>
  );
}
export default App;
