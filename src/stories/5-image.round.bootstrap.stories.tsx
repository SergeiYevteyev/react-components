import React from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default {
    title: 'Image',
    component: Image,
  };

export const imageboostrap = () => (<Container>
    <Row>
        <Col>
            <Image alt="some random man" src="https://source.unsplash.com/random/400x400" roundedCircle />
        </Col>
    </Row>
</Container>);
