import React, { Component } from "react";
import FridgeListSidebar from "../modules/FridgeListSidebar.js";
import RecipeFeed from "../modules/RecipeFeed.js";

import "./feed.css";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <div className= "feed-container">
          <span className="feed-item"><FridgeListSidebar /></span>
          <span className="feed-item"><RecipeFeed /></span>
        </div>
      </div>
    );
  }
}

export default Feed;
