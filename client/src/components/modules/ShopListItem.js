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
        <p className="ShopListItem-text">{this.props.qt}</p>
        <p className="ShopListItem-text">{this.props.ingredientID}</p>
      </div>
    );
  }
}

export default ShopListItem;
