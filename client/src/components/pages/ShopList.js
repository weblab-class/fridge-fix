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
    // console.log(itemList);
    if (itemList.length<15) {
      let itemZeros = new Array(15-itemList.length).fill(<ShopListItem ingredientID=" " qt=" " />);
      // console.log(itemZeros);
      itemList = itemList.concat(itemZeros);
      // console.log(itemList);
    }

    return (
      <div className="ShopList-container">
        <div className="ShopList-bgbox">
          <h1 className="ShopList-title">Shopping List</h1>
          {itemList}
          <button 
					className="item-add"
					onClick={this.addItem}
				>+</button>
        </div>
        <IngredientSearch targetList="shop" />
      </div>
    );
  }
}

export default ShopList;
