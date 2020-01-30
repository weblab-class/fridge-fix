import React, { Component } from "react";
import IngredientSearch from "../modules/IngredientSearch.js";
import "./ShopList.css";
import ShopListItem from "../modules/ShopListItem.js";
import { connect } from 'react-redux';


const testShopList = [
  {
    ingredientID: 0,
    qt: 1,
  },
  {
    ingredientID: 1,
    qt: 12,
  },
  {
    ingredientID: 2,
    qt: 2,
  },
]

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.state={
      // items: testShopList
    }
  }

  render() {
    const { shopList } = this.props;
    // let shopList = testShopList;
    let itemList = null;
    itemList = shopList.map((itemObj, index) => (
      {data: itemObj,
      i: index}
    )).map((itemObj) => (
      <ShopListItem
        index = {itemObj.i}
        ingredientID = {itemObj.data.ingredientID}
        qt = {itemObj.data.qt}
        expiration = {itemObj.data.expiration}
      />
    ));

    console.log(itemList);
    if (itemList.length<15) {
      let itemZeros = new Array(15-itemList.length).fill(<ShopListItem ingredientID=" " qt=" " />);
      itemList = itemList.concat(itemZeros);
    }

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
