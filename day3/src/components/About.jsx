import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';

const navLinkStyle = ({isActive}) => {
  return{
    fontWeight:  'normal',
    textDecoration:  'none',
    color: 'gray',
    textAlign:'justify',
    marginRight:'30px',
    fontSize: '20px'
  }
}

function About() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily:'fantasy', fontWeight:'lighter', fontStyle:'italic', marginRight:'0px'}}>
      <Container>
      {/* <Nav className="me-auto"></Nav> */}

        <Navbar.Brand href="#home">J. ALISSA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto"></Nav>
          
          <Nav>
          <NavLink to="/" style={navLinkStyle}>Home</NavLink>            
            <NavLink to="Portfolio" style={navLinkStyle}>Portfolio</NavLink>
            <NavLink to="About" style={navLinkStyle}>About</NavLink>
            <NavLink to="Books" style={navLinkStyle}>Books</NavLink>
            <NavLink to="Blogs" style={navLinkStyle}>Blogs</NavLink>
            <NavLink to="ClientAlbmuns" style={navLinkStyle}>Client Albums</NavLink>
            <NavLink to="Contact" style={navLinkStyle}>Contact</NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<br />
<br />
<br />
<br />
    <Container style={{ backgroundColor: '#DCDCDC', height: '115vh', width: '100vw'}}>
      <Row>
        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg/v1/fill/w_873,h_884,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97627769e7bd41538ecbf417234e55d9~mv2_d_4912_7360_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'115vh'}} />
           
          </div>
        </Col>

        <Col xs={6} md={6}>
        <Col xs={10} md={10}>
         
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', top: '80%',paddingTop:'200px', textAlign: 'justify', alignItems:'center', fontSize:'15px', marginLeft:'60px' }}>
              <h4 style={{fontSize:'50px'}}>ABOUT JADE</h4>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
            <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.</p>

            <h6>Education:</h6>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
              

              <h6>Awards & Nominations:</h6>
              <p>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
            </div>
          </div>
          </Col>
        </Col>
      </Row>
    </Container>

<br />

    <div className='d-flex justify-content-center align-items-center'>
    <PinterestIcon style={{  marginLeft: '20px' }}></PinterestIcon>
    <FacebookIcon style={{  marginLeft: '20px' }}></FacebookIcon>
    <TwitterIcon style={{  marginLeft: '20px' }}></TwitterIcon>
    <InstagramIcon style={{  marginLeft: '20px' }}></InstagramIcon>
    </div>
<br />
    <p className='d-flex justify-content-center align-items-center' style={{ fontFamily:'fantasy', fontStyle:'italic', fontWeight:'lighter', fontSize:'10px', textJustify:'inter-character'}}>&copy; {new Date().getFullYear(2035)} By The Art of Food. Powered and secured by 
    <a style={{ color:'black', marginLeft: '5px' }} href='#'>Wix</a></p>

    </>
  );
}

export default About;