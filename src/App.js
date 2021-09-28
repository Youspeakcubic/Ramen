import Intro from "./intro.js";
import Landing from "./landing.js";
import Ramen from "./ramen.js";
import Reviews from "./reviews.js";
import Contact from "./contact.js"

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return ( <
    div className = "App" >
    <
    Landing / >
    <
    Intro / >
    <
    Ramen / >
    <
    Reviews / >
    <
    Contact / >
    <
    /div>
  );
}

export default App;
