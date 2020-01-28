import React, { Component } from "react";
import IngredientSearch from "../modules/IngredientSearch.js";
import "./ShopList.css";
import ShopListItem from "../modules/ShopListItem.js";
import { connect } from 'react-redux';


// const testShopList = [
//   {
//     ingredientID: "onion",
//     qt: 1,
//   },
//   {
//     ingredientID: "egg",
//     qt: 12,
//   },
//   {
//     ingredientID: "bacon",
//     qt: 2,
//   },
// ]



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
    itemList = shopList.map((itemObj,index) => (
      <ShopListItem
        index = {index}
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
