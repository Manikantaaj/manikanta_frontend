import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CardImage() {
  return (
<>
    <Container>
      <Row>
        <Col xs={3} md={3}>
    <Card style={{ width: '17rem'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbi91RsacaYWMrqy_NTsalEHjbPy1MFH0uVkVXvuYlRZpWPYuKFGycQ_8-Bdl1MTqsc8&usqp=CAU" height={400}/>
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          Chief Executive Officer
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '17rem'}}>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/close-up-woman-working-laptop_23-2149300650.jpg" height={400}/>
      <Card.Body>
        <Card.Title>Sara Jhonson</Card.Title>
        <Card.Text>
         Poduct manager
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '17rem'}}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGQoDSrsIbXgS00DUJ0bngjM4y-2Jk0GPDfRMxdJxsBdg8wgZNbx7mfwoBYccgww7NMA&usqp=CAU" height={400} />
      <Card.Body>
        <Card.Title>william Andreson</Card.Title>
        <Card.Text>
         CTO
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col xs={3} md={3}>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/32/58/88/360_F_332588811_bYNAWoxbBHaAvIFfHNKk71OZrNBlzAVQ.jpg" height={400}/>
      <Card.Body>
        <Card.Title>Amada Japson</Card.Title>
        <Card.Text>
          Accoutant
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
</Row>
</Container>


    </>
  );
}

export default CardImage;