import {  Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { NavLink } from 'react-router-dom';

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

function Portfolio() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" style={{ fontFamily:'fantasy', fontWeight:'lighter', fontStyle:'italic', marginRight:'0px'}}>
      <Container>
      

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


<div>
  <h1 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy'}}>PORTFOLIO</h1>
  </div>    
    
<br />
<br />
<br />
<br />
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg/v1/fill/w_585,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_2ef1fc57fdd849a19df076e8fb6e036f~mv2_d_2681_2546_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'80vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'fantasy', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center'}}>
              <h2>EDITORIAL</h2>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg/v1/fill/w_568,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0865ef003a1740f9b703014d3b57e3fa~mv2_d_4928_3264_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'80vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'fantasy', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h2>FOOD & SERVE</h2>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg/v1/fill/w_570,h_869,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0ecca2bc73f444c98e8de071bb2ce81c~mv2_d_1927_1272_s_2.jpg" alt="Your Image" style={{ width: '100%', height:'80vh', filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute', fontFamily:'fantasy', top: '20%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h2>BAKED FOODS</h2>
              <Button variant="outline-light">View More</Button>{' '}
            </div>
          </div>
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

export default Portfolio;