import React from 'react';
import '../App.css';
import OurNav from './OurNav'
import Avatar from './Avatar'
import MainFeed from './MainFeed'
import {Col, Row, Container} from 'react-bootstrap'
import FriendsList from './FriendsList'


function App() {
  return (
    <div className="App">
      <OurNav/>
      <Container>
        <Row>
          <Col md={3}>
            <Avatar/>
          </Col>
          <Col md={6}>
            <MainFeed/>
          </Col>
          <Col md={3}>
            <FriendsList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
