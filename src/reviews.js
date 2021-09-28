import React from "react";
import SlotRev from "./slotRev.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FourStars from './images/4stars.png';
import Stars from './images/stars.png';

function Reviews() {
  return ( <
    div class = "slant1" >
    <
    div class = "reviews" >
    <
    h1 > Recent Reviews: < /h1> <
    br / >
    <
    Container >
    <
    Row >
    <
    Col >
    <
    SlotRev img = {
      FourStars
    }
    title = "Jeremy Hanks"
    desc = "Had a wonderful visit, customer service was lovely and the portions were immense. Would recommend to anyone in the area." /
    > < /Col> <
    Col >
    <
    SlotRev img = {
      Stars
    }
    title = "Tammy Lorey"
    desc = "Great prices for great food, the clerk was helpful and patient." /
    > < /Col> <
    Col >
    <
    SlotRev img = {
      FourStars
    }
    title = "Jeremy Hanks"
    desc = "Had a wonderful visit, customer service was lovely and the portions were immense. Would recommend to anyone in the area." /
    > < /Col> <
    Col >
    <
    SlotRev img = {
      Stars
    }
    title = "Tammy Lorey"
    desc = "Great prices for great food, the clerk was helpful and patient." /
    > < /Col> <
    Col class = "lastRev" >
    <
    SlotRev img = {
      Stars
    }
    title = "Tammy Lorey"
    desc = "Great prices for great food, the clerk was helpful and patient." /
    > < /Col> <
    /Row> <
    /Container> <
    /div> <
    /div>
  );
}
export default Reviews;
