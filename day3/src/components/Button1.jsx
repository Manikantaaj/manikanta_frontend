import React from 'react';
import { Button, Container } from 'react-bootstrap';


const Button1 = () => {
  return (
    <>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Portfolio</b>
      </Button>
      <br/>
      
    </Container>

    <h1 className="d-flex justify-content-center align-items-center">Check Our  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Portfolio</a></h1>

    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium, nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>

    <h5 className="d-flex justify-content-center align-items-center" style={{ height: '10vh', marginRight: '40px' }}>All<h5 style={{ marginLeft: '40px' }}>App</h5><h5 style={{ marginLeft: '40px' }}>Card</h5><h5 style={{ marginLeft: '40px' }}>Web</h5></h5>
    
    
    
    
    </>
  );
};

export default Button1;