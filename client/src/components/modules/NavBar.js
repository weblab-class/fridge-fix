import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import { get, post } from "../../utilities.js";
import "./NavBar.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "848241716739-mbsjshm9umshpbg7hu2cnntrkcdd1gf3.apps.googleusercontent.com";

/**
 * The Navigation Bar at the top of all pages. Takes no props.
 */

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  handleLogin = (res) => {
    // 'res' contains the response from Google's authentication servers
    console.log(res);

    this.setState({ loggedIn: true });
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      // the server knows we're logged in now
      console.log("successful login");
      console.log(user);
    });
  };

  handleLogout = () => {
    console.log("Logged out successfully!");
    this.setState({ loggedIn: false });
    post("/api/logout");
  };
  
  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
      <nav className="NavBar-container">
        <div className="NavBar-buttonContainer u-inlineBlock">
          <Link to="/" className="NavBar-button ">
            Home
          </Link>
          <Link to="/about/" className="NavBar-button">
            About
          </Link>
            
          {this.state.loggedIn ? (
            <>
              <Link to="/fridge" className="NavBar-button ">
                Fridge
              </Link>
              <Link to="/shop" className="NavBar-button">
                Shop
              </Link>
              <Link to="/profile" className="NavBar-button">
                Profile
              </Link>

            <GoogleLogout
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Logout"
              onLogoutSuccess={this.handleLogout}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
            />
            </>
          ) : (
            <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText="Login"
              onSuccess={this.handleLogin}
              onFailure={(err) => console.log(err)}
              className="NavBar-link NavBar-login"
          />)}  

        </div>
      </nav>
      </>
      );    
    }
}

export default NavBar;
