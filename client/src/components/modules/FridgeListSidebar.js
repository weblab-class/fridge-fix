import React, { Component } from "react";
import { Link } from "@reach/router";
import FridgeListSidebarItem from "./FridgeListSidebarItem.js";
import "./FridgeListSidebar.css";

/**
 * display fridge list items sorted by expiration. Also display navbutton
 *
 * Proptypes
 * none
 */

const testFridgeList = [
  {
    ingredientID: "onion",
    qt: 1,
    expiration: Date.now()+500000
  },
  {
    ingredientID: "egg",
    qt: 12,
    expiration: Date.now()
  },
  {
    ingredientID: "bacon",
    qt: 2,
    expiration: Date.now()+10500000
  },
]
  
class FridgeListSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: testFridgeList
    }
  }

  render() {
    let itemList = null;
    const hasItems = this.state.items.length !== 0;
    if (hasItems) {
      itemList = this.state.items
      .sort((a,b) => {
        return a.expiration-b.expiration;
      })
      .map((itemObj) => (
        <FridgeListSidebarItem
          ingredientID = {itemObj.ingredientID}
          qt = {itemObj.qt}
          expiration = {itemObj.expiration}
        />
      ));
    } else {
      itemList = <div>Empty fridge!</div>;
    }

    return (
      <div className="fridgelistsidebar-box">
        <h1 className="fridgelistsidebar-title">Fridge Alerts</h1>
        <div className="fridgelistsidebar-line"></div>
        <Link to="/fridge/" className="fridgelistsidebar-button">
          Open Fridge
        </Link>
        {itemList}
      </div>
    );
  }
}

export default FridgeListSidebar;
