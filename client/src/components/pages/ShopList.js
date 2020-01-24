import React, { Component } from "react";
import IngredientSearch from "../modules/IngredientSearch.js";

class ShopList extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <h1>Shopping List</h1>
        <IngredientSearch targetList="shop" />
      </div>
    );
  }
}

export default ShopList;
  