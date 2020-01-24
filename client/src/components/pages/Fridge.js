import React, { Component } from "react";
import FridgeList from "../modules/FridgeList.js";
import RecipeFeed from "../modules/RecipeFeed.js";

import "./feed.css";

class Fridge extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <div className= "feed-container">
          <span className="feed-item"><FridgeList /></span>
          <span className="feed-item"><RecipeFeed /></span>
        </div>
      </div>
    );
  }
}
  
export default Fridge;
