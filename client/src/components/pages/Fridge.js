import React, { Component } from "react";
import FridgeList from "../modules/FridgeList.js";
import RecipeFeed from "../modules/RecipeFeed.js";
import IngredientSearch from "../modules/IngredientSearch.js";

import "./Feed.css";

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
          <IngredientSearch className="feed-item" targetList="fridge" />
        </div>
      </div>
    );
  }
}
  
export default Fridge;
