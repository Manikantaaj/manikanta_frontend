import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ImageGrid() {
  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image src="https://img.freepik.com/premium-photo/sunglasses-isolated-pastel-brown-background_875864-230.jpg" width={350} height={400}/>
        </Col>
        <Col xs={4} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9qZ-y8piu8ICuDIrecjWsFmUnHqu2TOWrLCeIdvTEpA&s" width={350} height={400}/>
        </Col>
        <Col xs={4} md={4}>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TUQQutIaHI3Tmsjx6QOLMo0pwo-Ryo-CyZQ6_8iEDA&s" width={350} height={400}/>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageGrid;