import React, { Component } from "react";

import "./Home.css";
import "../../utilities.css";
import { Link, BrowserRouter } from "react-router-dom";

class Home extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <>
          {/* // <img src="images/HomeIcon.png" width="90%" /> */}
          <div className="Home-imageContainer">
            <div className="Home-image" />
          </div>    
          <div className="Home-introText u-textCenter">  
            Take control of your shopping and nutrition with FridgeFix.
          </div>
          <div className="u-flex u-flex-justifyCenter"> 
            <BrowserRouter>
              <Link to="/"  className="Home-button">
                <div className="Home-buttonText"> Register </div>
              </Link>
            </BrowserRouter>
          </div>
        </>
      );
    }
  }
  
  export default Home;
  
