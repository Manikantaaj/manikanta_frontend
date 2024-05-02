import React from 'react';
import { Card } from 'react-bootstrap';

const Horizontal = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <Card.Img variant="top" src="https://static.wixstatic.com/media/495dbf5ead054840a9b405f5b8e55af3.jpg/v1/fill/w_514,h_386,fp_0.50_0.50,q_90,enc_auto/495dbf5ead054840a9b405f5b8e55af3.jpg" alt="Your Image" style={{ width: '50%', height:'30vh'}} />
        </div>
        <div className="col-md-8">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default Horizontal;
