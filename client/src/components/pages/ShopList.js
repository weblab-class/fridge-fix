import React, { Component } from "react";
import IngredientSearch from "../modules/IngredientSearch.js";
import "./ShopList.css";
import ShopListItem from "../modules/ShopListItem.js";

const testShopList = [
  {
    ingredientID: "onion",
    qt: 1,
  },
  {
    ingredientID: "egg",
    qt: 12,
  },
  {
    ingredientID: "bacon",
    qt: 2,
  },
]



class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state={
      items: testShopList
    }
  }

  render() {
    let itemList = null;
    itemList = this.state.items.map((itemObj) => (
      <ShopListItem
        ingredientID = {itemObj.ingredientID}
        qt = {itemObj.qt}
      />
    ));

    return (
      <div className="ShopList-container">
        <div className="ShopList-bgbox">
          <h1 className="ShopList-title">Shopping List</h1>
          {itemList}
        </div>
        <IngredientSearch targetList="shop" />
      </div>
    );
  }
}

export default ShopList;
