import React from 'react';
import { Container, Image } from 'react-bootstrap'
import Doinks from '../img/doinks.jpg'

function Pic(){
  return (
    <Container>
    <Image src={Doinks} roundedCircle />
    </Container>
  );
}

export default Pic;
