import React, { Component } from "react";
import { Link } from "@reach/router";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./NavBar.css";

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
  
  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <>
      <nav className="NavBar-container">
        <div className="NavBar-buttonContainer u-inlineBlock">

            <Link to="/home/" className="NavBar-button ">
                Home
            </Link>

            <Link to="/about/" className="NavBar-button">
                About
            </Link>
             
            {this.props.userId ? (
                <GoogleLogout
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={this.props.handleLogout}
                    onFailure={(err) => console.log(err)}
                    className="NavBar-button NavBar-login"
                />
                ) : (
                <GoogleLogin
                    clientId={GOOGLE_CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.props.handleLogin}
                    onFailure={(err) => console.log(error)}
                    className="NavBar-button NavBar-login"
                />
            )}

            {this.props.userId && (
                <>
              <Link to={`/fridge/${this.props.userId}`} className="NavBar-button">
                Fridge
              </Link>
              
              <Link to={`/shop/${this.props.userId}`} className="NavBar-button">
                Shop
              </Link>
                </>
            )}

        </div>
      </nav>
      </>
      );    
    }
}

export default NavBar;
