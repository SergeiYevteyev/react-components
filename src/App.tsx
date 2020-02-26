import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {
  return (
    <Container>
    <Row>
      <Col xs={8}>

      </Col>
        <Col xs={4}>
            <Image alt="some random image" src="https://source.unsplash.com/random/200x200" roundedCircle />
        </Col>
    </Row>
</Container>
  );
}

export default App;
