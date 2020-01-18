import React, { Component } from "react";
import FridgeListSidebar from "../modules/FridgeListSidebar.js";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Feed</h1>
        <FridgeListSidebar />
      </div>
    );
  }
}

export default Feed;
