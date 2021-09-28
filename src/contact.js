import Table from 'react-bootstrap/Table';
import GoogleApiWrapper from './googleapiwrapper.js'

function Contact() {
  return ( <
    div class = "contact" >
    <
    div class = "contactTable" >
    <
    Table striped bordered hover variant = "dark" >
    <
    thead >
    <
    tr >
    <
    th > Locations < /th> <
    th > Address < /th> <
    th > Phone number < /th> <
    th > Hours < /th> < /
    tr > <
    /thead> <
    tbody >
    <
    tr >
    <
    td > San Antonio < /td> <
    td > 2013 Dividend Rd San Antonio, 78210 < /td> <
    td > 210 - 428 - 1928 < /td> <
    td > 10 am - 8 pm < /td> < /
    tr > <
    tr >
    <
    td > Austin < /td> <
    td > 4390 Portsmith dr Austin, 77029 < /td> <
    td > 209 - 213 - 0329 < /td> <
    td > 12 pm - 12 am < /td> < /
    tr > <
    tr >
    <
    td > Corpus Cristi < /td> <
    td > 1029 Toronto St Corpus Cristi, 76021 < /td> <
    td > 205 - 320 - 4290 < /td> <
    td > 12 pm - 10 pm < /td> < /
    tr >
    <
    tr >
    <
    td colSpan = "2" >
    <
    small > & copy; Copyright 2018, Texas Ramen < /small> <
    /td> <
    /tr> < /
    tbody > <
    /Table> <
    /div> <
    div class = "googleMaps" >
    <
    GoogleApiWrapper / >
    <
    /div>

    <
    /div>
  );
}
export default Contact;
