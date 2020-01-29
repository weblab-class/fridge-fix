import React, { Component } from "react";

import "./Home.css";
import "../../utilities.css";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
import GoogleLogin, { GoogleLogout } from "react-google-login";


class Home extends Component {
    constructor(props) {
			super(props);
			
			this.state = {};
    }
    
    render() {
      return (
        <div className="scroll">
          {/* // <img src="images/HomeIcon.png" width="90%" /> */}
          <div className="Home-imageContainer">
            <div className="Home-image" />
          </div>    
          <div className="Home-introText u-textCenter">  
            Take control of your shopping and nutrition with FridgeFix.
          </div>
          <div className="u-flex u-flex-justifyCenter"> 
              <a href="#about" className="Home-button">
                <div className="Home-buttonText"> About </div>
              </a>
          </div>

          <div className="About-page About-pg1" id="about">
            <div className="About-text About-oddText">KNOW YOUR FRIDGE</div>
            <div className="About-text About-evenText">KEEP TRACK OF GROCERIES</div>
            <div className="About-text About-oddText">DON'T LET FOOD EXPIRE!</div>
            <div className="About-text About-evenText">FIND OUT WHAT YOU CAN MAKE</div>
          </div>
        </div>
      );
    }
  }
  
  export default Home;
  
