import Card from 'react-bootstrap/Card';

function SlotRev(props){
  return(
  <Card style={{ width: '10rem', backgroundColor:'#EBE1BD' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.desc}</Card.Text>
  </Card.Body>
</Card>
);
}
export default SlotRev;
