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
  
  /*componentDidMount() {
    // remember -- api calls go here!
  }*/

  render() {

    return (
    <>
        <nav className="NavBar-container">
            <div className="NavBar-linkContainer u-inlineBlock">

            <div class="flex-container">
            <div>  </div>
            <div> </div>
            <div> </div>
            </div>

            <Link to={`/home/`} className="NavBar-link">
            Home
            </Link>            
            
            <Link to={`/about/`} className="NavBar-link">
            About
            </Link>

            {this.props.userId && (
            <>
            <Link to={`/fridge/${this.props.userId}`} className="NavBar-link">
              Fridge
            </Link>
            <Link to={`/shop/${this.props.userId}`} className="NavBar-link">
            Fridge
            </Link>
            </>
            )}

            {this.props.userId ? (
            <GoogleLogout
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Logout"
                onLogoutSuccess={this.props.handleLogout}
                onFailure={(err) => console.log(err)}
            />
            ) : (
            <GoogleLogin
                clientId={GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={this.props.handleLogin}
                onFailure={(err) => console.log(err)}
            />
            )}

            

            </div>
        </nav>

{/*         
        <h1>Good luck on your project :)</h1>
        <h2> What we provide in this skeleton</h2>
        <ul>
          <li>Google Auth (Skeleton.js & auth.js)</li>
          <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
          <li>User Model (auth.js & user.js)</li>
        </ul>
        <h2> What you need to change</h2>
        <ul>
          <li>Change the font in utilities.css</li>
          <li>Change the Frontend CLIENT_ID for Google Auth (Skeleton.js)</li>
          <li>Change the Server CLIENT_ID for Google Auth (auth.js)</li>
          <li>Change the Database SRV for Atlas (server.js)</li>
          <li>Change the Database Name for MongoDB (server.js)</li>
          <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
          <li>Update website title in client/dist/index.html</li>
        </ul> */}
    </>
    );
  }
}

export default NavBar;