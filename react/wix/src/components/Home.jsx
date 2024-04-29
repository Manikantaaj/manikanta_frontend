import {  Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';




const Home = () => {
  return (
    <>
   <RouterLink/>
<br />
<br />
<br />

    <Container>
      <Row>
        <Col>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg/v1/fill/w_1745,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_97a68d95c3584eee8952b7b3184f5f80~mv2_d_6924_3840_s_4_2.jpg" alt="Your Image" style={{ width: '100%', height:'115vh',filter: 'brightness(50%)'}} />
            <div style={{ position: 'absolute',fontFamily:'revert-layer', fontStyle:'oblique',fontWeight:'lighter', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textAlign: 'center' }}>
              <h1 style={{fontSize:'400%'}}>THE ART OF FOOD</h1>
              <p style={{fontSize:'200%'}}>PHOTOGRAPHY</p>
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

export default Home;