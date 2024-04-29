import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';


function Bizland() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{ boxShadow: '0 6px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
      {/* <Nav className="me-auto"></Nav> */}

        <Navbar.Brand href="#home">Bizland.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>            
            <Nav.Link href="#deets">About</Nav.Link>
            <Nav.Link href="#deets">Service</Nav.Link>
            <Nav.Link href="#deets">Portfolio</Nav.Link>
            <Nav.Link href="#deets">Team</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    



    </>
  );
}

export default Bizland;