import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import { get, post } from "../../utilities.js";
import "./NavBar.css";
import { Redirect } from "react-router-dom";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "848241716739-mbsjshm9umshpbg7hu2cnntrkcdd1gf3.apps.googleusercontent.com";

/**
 * The Navigation Bar at the top of all pages. Takes no props.
 */

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleLogin = (res) => {
  //   // 'res' contains the response from Google's authentication servers
  //   console.log(res);  
  //   const userToken = res.tokenObj.id_token;
  //   console.log(userToken)
  //   post("/api/login", { token: userToken }).then((user) => {
  //     // the server knows we're logged in now
  //     this.setState({userId: user._id})
  //     console.log(user);
  //   });
  // };

  // handleLogout = () => {
  //   console.log("Logged out successfully!");
  //   this.setState({ userId: null });
  //   post("/api/logout");
  // };
  
  componentDidMount() {
    // get("/api/whoami").then((user) => {
    //   if (user._id) {
    //     // if the user is logged in, save their ID in react state
    //     this.setState({ userId: user._id });
    //   }
    // });
  }

  render() {
    return (
      <>
      <nav className="NavBar-container">
        <div className="NavBar-buttonContainer u-inlineBlock">            
          {this.props.userId ? (
            <>
              <Link to="/feed" className="NavBar-button ">
                Home
              </Link>
              {/* <Link to="/about" className="NavBar-button">
                About
              </Link> */}
              <Link to="/fridge" className="NavBar-button ">
                Fridge
              </Link>
              <Link to="/shop" className="NavBar-button">
                Shop
              </Link>
              <Link to={`/profile/${this.props.userId}`} className="NavBar-button">
                Profile
              </Link>

            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.props.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
            </>
          ) : (
            <>
            <Link to="/" className="NavBar-button ">
              Home
            </Link>
            {/* <Link to="/about/" className="NavBar-button">
              About
            </Link> */}
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.props.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
            </>)}  

        </div>
      </nav>
      </>
      );    
    }
}

export default NavBar;
