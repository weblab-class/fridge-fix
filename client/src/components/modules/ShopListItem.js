import React, { Component } from "react";
import "./ShopListItem.css";

/**
 * display Fridge item qt and name, colored if there is an alert.
 *
 * Proptypes
 * @param {string} ingredientID
 * @param {string} qt
 */


class ShopListItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={`ShopListItem-box`}>
        <p className="ShopListItem-text ShopListItem-qt">{this.props.qt}</p>
        <p className="ShopListItem-text ShopListItem-name">{this.props.ingredientID}</p>
        <div className="ShopListItem-buttonContainer"> <button> Log </button> </div>
      </div>
    );
  }
}

export default ShopListItem;
