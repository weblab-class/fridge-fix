import React, { Component } from "react";
import { Link } from "@reach/router";
import FridgeListSidebarItem from "./FridgeListSidebarItem.js";

//import ShopListItem from "./ShopListItem.js";

import "./ShopList.css";


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
      super(props)
    }

        //  ingredientId: FridgeListSidebarItem.ingredientID,
      //  qt: FridgeListSidebarItem.qt,
    render() {
      return (
          <div className="ShopListContainer">
              <div className="ShopItemContainer">
                  {this.props.FridgeListSidebar.map((shop_item) => (
                      <FridgeListSidebarItem
                        key={`FridgeListSiderBarItem_${ingredientID}`}
                        _id={ingredientID}
                        qt={FridgeListSiderBarItem.qt}
                      />  
                  ))}
              </div>
          </div>
      );
    }
  }

  
  export default FridgeListSidebar;
  