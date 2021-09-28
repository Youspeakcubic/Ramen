import React from "react";
import Slot from "./card.js"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tonk from "./images/tonk.jpg";
import Shoyu from "./images/shoyu.jpg";
import Miso from "./images/miso.jpg";

function Ramen() {
  return ( <
    div class = "slant" >
    <
    div class = "ramen" >
    <
    h1 > Our Choices < /h1> <
    br / >
    <
    Container >
    <
    Row >
    <
    Col >
    <
    Slot img = {
      Tonk
    }
    title = "Tonkotsu"
    desc = "Succulent cuts of pork belly with a rich pork bone broth, The strong flavors sink into all the additional vegetables and noodles for a great experience" /
    > < /Col> <
    Col >
    <
    Slot img = {
      Shoyu
    }
    title = "Shoyu"
    desc = "thin cuts of chicken breast marinated for 3 days to achieve optimal flavor, with rich vegetables and our poached eggs." /
    > < /Col> <
    Col >
    <
    Slot img = {
      Miso
    }
    title = "Miso"
    desc = "a blend of Hearty vegetables in a our signature vegetable broth. A perfect choice for vegetarians." /
    > < /Col> <
    /Row> <
    /Container> <
    /div> <
    /div>
  );
}
export default Ramen;
