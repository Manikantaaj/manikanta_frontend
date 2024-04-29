import {  Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';



function ClientAlbmuns() {
  return (
    <>
   
<RouterLink/>

    <h1 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy', fontSize:'60px'}}>CLIENT ALBUMS</h1>
   
   <br />
   <br />
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
           <a href='#' ><img src="/herbal.webp" alt="Your Image" style={{ width: '100%', height:'60vh', filter: 'brightness(50%)'}} /></a>
            <div style={{ position: 'absolute', fontFamily:'fantasy',fontSize:'15px', textAlign: 'justify',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h4>GREEN EDITORIAL</h4>
              <p>Client: Herbal Magazine</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
           <a href='#'> <img src="/apple.jpeg" alt="Your Image" style={{ width: '100%', height:'60vh', filter: 'brightness(50%)'}} /></a>
            <div style={{ position: 'absolute',textAlign: 'justify',fontSize:'15px', fontFamily:'fantasy',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h4>BREAD BAKING RECEPIES </h4>
              <p>Client: The Baker Blog</p>
            </div>
          </div>
        </Col>

        <Col xs={4} md={4}>
          <div style={{ position: 'relative' }}>
           <a href='#'> <img src="/backefood.jpeg" alt="Your Image" style={{ width: '100%', height:'60vh', filter: 'brightness(50%)'}} /></a>
            <div style={{ position: 'absolute',textAlign: 'justify', fontSize:'15px',fontFamily:'fantasy',top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h4>French Cookbook</h4>
              <p>Client: La Peche </p>
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

export default ClientAlbmuns;