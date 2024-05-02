import React from 'react';
import { Button, Container } from 'react-bootstrap';


const ContentTeam = () => {
  return (
    <>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '10vh' }}>
      <Button variant="info" style={{ backgroundColor: '#a8dadc', color: '#007bff', height: '30px', width: '80px' }} size="sm">
       <b>Team</b>
      </Button>
      <br/>
      
    </Container>

    <h1 className="d-flex justify-content-center align-items-center">Our hardWorking  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Team</a></h1>

    <p className="d-flex justify-content-center align-items-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque cupiditate quis facilis excepturi praesentium,</p>
    <p className="d-flex justify-content-center align-items-center">nemo maiores nihil eos dolore natus? Ipsam aperiam cupidita</p>
    


      
    
    </>
  );
};

export default ContentTeam