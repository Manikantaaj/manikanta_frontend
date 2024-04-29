import {  Container, Row, Col } from 'react-bootstrap';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import RouterLink from './RouterLink';




function Blogs() {
  return (
    <>
    <RouterLink/>


    <h1 className="d-flex justify-content-center align-items-center" style={{ paddingTop:'80px', fontFamily:'fantasy'}}>MY BLOGS</h1>

    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/495dbf5ead054840a9b405f5b8e55af3.jpg" alt="Your Image" style={{ width: '80%', height:'28vh', paddingTop:'10px', marginLeft:'135px'}} />
          </div>
        </Col>

        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 380 }} style={{marginTop:'10px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
       
      />
      
      <CardContent>
        <h6>The holiday special</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
        <hr />
      </CardContent>
      
      <CardActions disableSpacing>
      </CardActions>
    </Card> 
        </Col>
      </Row>
    </Container>


    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>
      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/cd1da2d221ec4d71af4e3ed305010c7c.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/cd1da2d221ec4d71af4e3ed305010c7c.jpg" alt="Your Image" style={{ width: '80%', height:'26vh', marginLeft:'135px'}} />
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
     
      <CardContent>
        <h6>Simple backdrops for food shots</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
      </CardActions>
    </Card>
        </Col>
      </Row>
    </Container>

    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/ce9814ce9f304fd6a9ae1bb862863c81.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/ce9814ce9f304fd6a9ae1bb862863c81.jpg" alt="Your Image" style={{ width: '80%', height:'27vh', paddingTop:'10px', marginLeft:'135px'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
   
      <CardContent>
        <h6>Before the drip</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
      </CardActions>
    </Card>   
        </Col>

      </Row>
    </Container>
    

    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/57a7b875930547cdb003bc37b6713574.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/57a7b875930547cdb003bc37b6713574.jpg" alt="Your Image" style={{width: '80%', height:'26vh', paddingTop:'10px', marginLeft:'135px'}} />
            </div>
            </Col>

            <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
    
      <CardContent>
        <h6>Styling your shots</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
        </Col>

      </Row>
    </Container>


    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/9e01dfb9a15749e482e69dbc82886703.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/9e01dfb9a15749e482e69dbc82886703.jpg" alt="Your Image" style={{ width: '80%', height:'26vh', paddingTop:'10px', marginLeft:'135px'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
    
      <CardContent>
        <h6>The perfect sizzle</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
      </CardContent>
      <hr />
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
        </Col>

      </Row>
    </Container>


    <Container style={{ backgroundColor: '#DCDCDC', height: '50vh', width: '100vw'}}>
      <Row>

      <Col xs={6} md={6}>
          <div style={{ position: 'relative' }}>
            <img src="https://static.wixstatic.com/media/c4f7ff68441b408eb753f40e1ba38756.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/c4f7ff68441b408eb753f40e1ba38756.jpg" alt="Your Image" style={{ width: '80%', height:'26vh', paddingTop:'10px', marginLeft:'135px'}} />
           
          </div>
        </Col>
        <Col xs={6} md={6}>
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        
        title="Admin"
        subheader="May 23, 2023 . 1 min"
      />
     
      <CardContent>
        <h6>Eating with your eyes first</h6>
        <Typography variant="body2" color="text.secondary">
        Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....
        </Typography>
        <hr />
      </CardContent>
      <CardActions disableSpacing>
     
        
      </CardActions>
    </Card>
          
       
          
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

export default Blogs;