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
        <>
          {/* // <img src="images/HomeIcon.png" width="90%" /> */}
          <div className="Home-imageContainer">
            <div className="Home-image" />
          </div>    
          <div className="Home-introText u-textCenter">  
            Take control of your shopping and nutrition with FridgeFix.
          </div>
          <div className="u-flex u-flex-justifyCenter"> 
              <div className="Home-button">
                <div className="Home-buttonText"> Learn More! </div>
              </div>
          </div>

          <div className="About-page About-pg1">
            <div className="About-oddText">
              KNOW YOUR FRIDGE  
            </div>
            <div className="About-box About-oddBox"/>
          </div>
        </>
      );
    }
  }
  
  export default Home;
  
