import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Chopsticks from "./images/chopsticks.png"
import Stars from "./images/stars.png"

function Intro(){
  return(
  <div>
  <Jumbotron fluid style={{position:'absolute',top:'25%',opacity:'.8', width:'100%', backgroundColor: '#EBE1BD',border:'3px #552400 solid'}}>
    <Container style={{textAlign:'center'}}>
    <img
      alt=""
      src={Chopsticks}
      width="100"
      height="100"
      className="d-inline-block align-top"
    />
      <h1 class="titleH1">Authentic Japanese Ramen</h1>
      <br />
      <p class ="sentP">
        With generations of traditional techniques and seasoning, our bowls are packed with exquisite flavor you'll fall in love with.
      </p>
      <img
        alt=""
        src={Stars}
        width="100"
        height="100"
        className="d-inline-block align-top"
      />
    </Container>
  </Jumbotron>
  </div>
);
}
export default Intro;
