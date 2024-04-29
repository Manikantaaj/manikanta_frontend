import {  Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';


function Books() {
  return (
    <>
  <RouterLink/>

    <h1 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy'}}>BOOKS</h1>
   
<br />
<br />
   <div>
    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
       

        <Col xs={6} md={6}>
        
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10%',paddingTop:'150px', marginLeft:'150px', fontStyle:'italic', textAlign:'-webkit-match-parent' }}>
              <p style={{fontSize:"30px"}}>BREAKFASTS</p>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <h4>40$ <Button variant="outline-light" style={{marginLeft:'210px'}}>Buy Now</Button>{' '}</h4>
            </div>
          </div>
        </Col>
        

        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_0541e64c3f484138a15c42a0dc363911~mv2_d_5182_3780_s_4_2.png" alt="Your Image" style={{ width: '90%', height:'50vh', paddingTop:'100px'}} />
           
          </div>
        </Col>
      </Row>
    </Container>
    </div>
    <br />
<div>
    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', top: '80%',paddingTop:'150px', marginLeft:'150px', fontStyle:'italic', textAlign:'-webkit-match-parent'  }}>
              <p style={{fontSize:"30px"}}>SUGAR & SPICE</p>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <h4>34$ <Button variant="outline-light" style={{marginLeft:'210px'}}>Buy Now</Button>{' '}</h4>
            </div>
          </div>
        </Col>

        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_44e0a04431f84ab8ac9d22b2f77c9acf~mv2_d_5182_3780_s_4_2.png" alt="Your Image" style={{ width: '90%', height:'50vh', paddingTop:'100px'}} />
          </div>
        </Col>
      </Row>
    </Container>
    </div>
<br />
    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: '80%',paddingTop:'150px', marginLeft:'150px', fontStyle:'italic', textAlign:'-webkit-match-parent' }}>
              <p style={{fontSize:"30px"}}>HOLIDAY SEASON SPECIALS</p>
              <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
            <h4>25$ <Button variant="outline-light" style={{marginLeft:'210px'}}>Buy Now</Button>{' '}</h4>
            </div>
          </div>
        </Col>

        <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png/v1/fill/w_600,h_438,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f61af8_b6a9b3e151b44cb48f58651b716bee98~mv2_d_5182_3780_s_4_2.png" alt="Your Image" style={{ width: '90%', height:'50vh', paddingTop:'100px'}} />
           
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

export default Books;