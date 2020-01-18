import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";
import FridgeList from "./pages/FridgeList.js";
import About from "./pages/About.js";
import ShopList from "./pages/ShopList.js";
import Recipe from "./pages/Recipe.js";
import Ingredient from "./pages/Ingredient.js";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registed in the database, and currently logged in.
        this.setState({ userId: user._id });
      }
    });
  }

  handleLogin = (res) => {
    console.log(`Logged in as ${res.profileObj.name}`);
    const userToken = res.tokenObj.id_token;
    post("/api/login", { token: userToken }).then((user) => {
      this.setState({ userId: user._id });
      post("/api/initsocket", { socketid: socket.id });
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  render() {
    return (
      <>
        <Router>
          <Home path="/test" />
          <Skeleton
            path="/"
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            userId={this.state.userId}
          />
          <FridgeList path="/fridge" />
          <ShopList path="/shop" />
          <About path="/about" />
          <Profile path="/profile" />
          <Ingredient path="/ingredient" />
          <Recipe path="/recipe" />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
