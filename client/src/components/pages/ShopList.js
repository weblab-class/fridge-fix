import React, { Component } from "react";
import IngredientSearch from "../modules/IngredientSearch.js";
import "./ShopList.css";
import ShopListItem from "../modules/ShopListItem.js";
import { connect } from 'react-redux';

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state={
      // items: testShopList
    }
  }

  render() {
    const { shopList } = this.props;
    let itemList = null;

    const hasItems = shopList.length !== 0;
    if (hasItems) {
      itemList = shopList
      .map((itemObj, index) => (
        <ShopListItem
          index = {index}
          _id = {itemObj._id}
          ingredientID = {itemObj.ingredientID}
          qt = {itemObj.qt}
        />
      ));
    } else {
      itemList = <div>Empty shopping list!</div>;
    }

    /*
    console.log(itemList);
    if (itemList.length<15) {
      let itemZeros = new Array(15-itemList.length).fill(<ShopListItem ingredientID=" " qt=" " />);
      itemList = itemList.concat(itemZeros);
    }
    */

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

const mapStateToProps = (state) => {
  return {
    shopList: state.shopList.shopList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};


export default connect(mapStateToProps, mapDispatchToProps)(ShopList);
