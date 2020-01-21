import React, { Component } from "react";
import { Link } from "@reach/router";
import "./FridgeList.css"
import { get } from "../../utilities";
import FridgeListItem from "./FridgeListItem.js";

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


class FridgeList extends Component {
    constructor(props) {
      super(props)
      this.state = {
        items: testFridgeList
      }
    }
        //  ingredientId: FridgeListSidebarItem.ingredientID,
      //  qt: FridgeListSidebarItem.qt,

      render() {
        let itemList = null;
        const hasItems = this.state.items.length !== 0;
        if (hasItems) {
          itemList = this.state.items
          .sort((a,b) => {
            return a.expiration-b.expiration;
          })
          .map((itemObj) => (
            <FridgeListItem
              ingredientID = {itemObj.ingredientID}
              qt = {itemObj.qt}
              expiration = {itemObj.expiration}
            />
          ));
        } else {
          itemList = <div>Empty fridge!</div>;
        }
    
        return (
          <div className="fridgelist-box">
            <h1 className="fridgelist-title">You have .... </h1>
            {itemList}
          </div>
        );
      }
    }
    
    export default FridgeList;
    