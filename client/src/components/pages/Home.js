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
          {/* <div className="u-flex u-flex-justifyCenter"> 
              <div className="Home-button" onClick={this.props.handleLogin}>
                <div className="Home-buttonText"> Register </div>
              </div>
          </div> */}
        </>
      );
    }
  }
  
  export default Home;
  
