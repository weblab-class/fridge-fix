import React, { Component } from "react";
import { Link } from "@reach/router";
import "./FridgeList.css"
import { get } from "../../utilities";
import FridgeListItem from "./FridgeListItem.js";
import { connect } from 'react-redux';


class FridgeList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { fridgeList } = this.props;
    let itemList = null;

    const hasItems = fridgeList.length !== 0;
    if (hasItems) {
      itemList = fridgeList
      .map((itemObj, index) => (
        {data: itemObj,
        i: index}
      ))
      .sort((a,b) => {
        return a.data.expiration-b.data.expiration;
      })
      .map((itemObj) => (
        <FridgeListItem
          index = {itemObj.i}
          _id = {itemObj.data._id}
          ingredientID = {itemObj.data.ingredientID}
          qt = {itemObj.data.qt}
          expiration = {itemObj.data.expiration}
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
    
const mapStateToProps = (state) => {
  return {
    fridgeList: state.fridgeList.fridgeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeList);
    