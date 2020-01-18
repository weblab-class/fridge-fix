import React, { Component } from "react";

import "./Home.css";
import "../../utilities.css";

class Home extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        // <img src="images/HomeIcon.png" width="90%" />
        <div className="Home-imageContainer">
          <div className="Home-image" />
        </div>    

      );
    }
  }
  
  export default Home;
  
