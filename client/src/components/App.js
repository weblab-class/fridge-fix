import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import NavBar from "./modules/NavBar.js";
import RecipePage from "./pages/RecipePage.js";
import Skeleton from "./pages/Skeleton.js";
import Fridge from "./pages/Fridge.js";
import About from "./pages/About.js";
import Feed from "./pages/Feed.js";
import ShopList from "./pages/ShopList.js";
import Ingredient from "./pages/Ingredient.js";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";

import { connect } from 'react-redux';

import * as fridgeListActions from "../actions/fridgeListActions";
import * as shopListActions from "../actions/shopListActions";


const GOOGLE_CLIENT_ID = "848241716739-mbsjshm9umshpbg7hu2cnntrkcdd1gf3.apps.googleusercontent.com";


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

  async componentDidMount () {
    console.log("refreshed");
    //await post("/api/refresh");
    get("/api/whoami").then((user) => {
      if (user._id) {
        // they are registered in the database, and currently logged in.
        this.setState({ userId: user._id });
        this.props.initializeFridgeList(user.fridgeList);
        this.props.initializeShopList(user.shopList);
      }
    });
  }

  handleLogin = (res) => {
    // 'res' contains the response from Google's authentication servers
    console.log(res);  
    const userToken = res.tokenObj.id_token;
    console.log(userToken)
    post("/api/login", { token: userToken }).then((user) => {
      // the server knows we're logged in now
      this.setState({userId: user._id})
      this.props.initializeFridgeList(user.fridgeList);
      this.props.initializeShopList(user.shopList);
      console.log(user);
    });
  };

  handleLogout = () => {
    console.log("Logged out successfully!");
    this.setState({ userId: undefined });
    this.props.clearFridgeList();
    this.props.clearShopList();
    post("/api/logout");
  };

  render() {
    let redirect = {};
    if (this.state.redirect != null) {
      redirect = <Redirect to={`/${this.state.redirect}`}/>;
    };

    return (
      <>
      <NavBar
        path="/"
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        userId={this.state.userId}
      />
      <Router>
        <Home 
          path="/"
          handleLogin={this.handleLogin}
          clientId = {GOOGLE_CLIENT_ID} 
        />
        <div path="/">{redirect}</div>
        <Fridge path="/fridge" />
        <Feed path="/feed" />
        <RecipePage path="/recipe/:recipeID" />
        <ShopList path="/shop" />
        <About path="/about" />
        <Profile path="/profile/:userId" />
        <Ingredient path="/ingredient" />

        {/* <Skeleton path="/skeleton" 
        handleLogin={this.handleLogin}
        handleLogout={this.handleLogout}
        userId={this.state.userId}          
        /> */}

        <NotFound default />
      </Router>

      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {  };
};

//
const mapDispatchToProps = (dispatch) => {
  return {
    initializeFridgeList: (fridgeList) => dispatch(fridgeListActions.initializeFridgeList(fridgeList)),
    clearFridgeList: () => dispatch(fridgeListActions.clearFridgeList()),
    initializeShopList: (shopList) => dispatch(shopListActions.initializeShopList(shopList)),
    clearShopList: () => dispatch(shopListActions.clearShopList())
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
