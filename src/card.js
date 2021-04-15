import Card from 'react-bootstrap/Card';
function Slot(props){
  return(
  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>{props.desc}</Card.Text>
  </Card.Body>
</Card>
);
}
export default Slot;
