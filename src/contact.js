import Table from 'react-bootstrap/Table'

function Contact(){
  return(
    <div>
    <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Locations</th>
      <th>Address</th>
      <th>Phone number</th>
      <th>Hours</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>San Antonio</td>
      <td>Austin</td>
      <td>Corpus Cristi</td>
    </tr>
    <tr>
      <td>210-305-1032</td>
      <td>210-290-2912</td>
      <td>409-420-6995</td>
    </tr>
    <tr>
      <td>10am-12am</td>
      <td colSpan="2">9am - 1am</td>
      <td>12pm - 10pm</td>
    </tr>
  </tbody>
</Table>
    </div>
  );
}
export default Contact;
