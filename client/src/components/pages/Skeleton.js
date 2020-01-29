import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";
import "./Skeleton.css";

const GOOGLE_CLIENT_ID = "848241716739-mbsjshm9umshpbg7hu2cnntrkcdd1gf3.apps.googleusercontent.com";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }
  
  componentDidMount() {

    // remember -- api calls go here!
  }

  render() {
    return (
      // <>
      //   {this.props.userId ? (
      //     <GoogleLogout
      //       clientId={GOOGLE_CLIENT_ID}
      //       buttonText="Logout"
      //       onLogoutSuccess={this.props.handleLogout}
      //       onFailure={(err) => console.log(err)}
      //     />
      //   ) : (
      //     <GoogleLogin
      //       clientId={GOOGLE_CLIENT_ID}
      //       buttonText="Login"
      //       onSuccess={this.props.handleLogin}
      //       onFailure={(err) => console.log(err)}
      //     />
      //   )}
      //   <h1>Good luck on your project :)</h1>
      //   <h2> What we provide in this skeleton</h2>
      //   <ul>
      //     <li>Google Auth (Skeleton.js & auth.js)</li>
      //     <li>Socket Infrastructure (client-socket.js & server-socket.js)</li>
      //     <li>User Model (auth.js & user.js)</li>
      //   </ul>
      //   <h2> What you need to change</h2>
      //   <ul>
      //     <li>Change the font in utilities.css</li>
      //     <li>Add a favicon to your website at the path client/dist/favicon.ico</li>
      //   </ul>
      // </>
      <>
        <nav>
          <a href="#page-1">1</a>
          <a href="#page-2">2</a>
          <a href="#page-3">3</a>
        </nav>
        <scroll-container>
          <scroll-page id="page-1">1</scroll-page>
          <a href="#page-1">1</a>

          <scroll-page id="page-2">2</scroll-page>
          <scroll-page id="page-3">3</scroll-page>
        </scroll-container>
      </>
    );
  }
}

export default Skeleton;
