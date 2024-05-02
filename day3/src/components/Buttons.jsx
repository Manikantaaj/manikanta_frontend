import React from 'react';
import { Button, Container } from 'react-bootstrap';

const Buttons = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '40vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Portfolio</b>
      </Button>
      {/* <h1>Check Our Portfolio</h1> */}
    </Container>

  );
};

export default Buttons;