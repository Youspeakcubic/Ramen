import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Logo from "./images/Logo.png"
import Background from "./images/main.jpg"
import Chopsticks from "./images/chopsticks.png"
import Stars from "./images/stars.png"
function Landing(){
  return(
    <div>
      <img
        alt=""
        src={Background}
        width="100%"
        height="50%"
        className="d-inline-block align-top"
      />
    <div class="main">
      <Navbar class="navbar" variant="light">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Texas Ramen - Everything is bigger in Texas
          </Navbar.Brand>
        </Navbar>
      </div>
    </div>
  );
}
export default Landing;
