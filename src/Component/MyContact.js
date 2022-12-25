import Card from 'react-bootstrap/Card';

function MyContact() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/10/dd/87/10dd8729ad646a40294339e97998aa32.jpg" />
      <Card.Body className='text-center' >
        <Card.Title ><h2>My Contact</h2></Card.Title>
        <Card.Text>
            <li>
            Phone: 0452189276
            </li>
            <li>
            Gmail: dva@gmail.com
            </li>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default MyContact;