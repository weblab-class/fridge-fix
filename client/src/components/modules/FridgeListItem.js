import React, { Component } from "react";
import "./FridgeListItem.css";

/**
 * display Fridge item qt and name, colored if there is an alert.
 *
 * Proptypes
 * @param {string} ingredientID
 * @param {string} qt
 * @param {string} expiration
 */

const alertThresh = [
	{
		threshold: 10000000, //~1day
		css: "fridgelistsidebaritem-warning"
	},
	{
		threshold: 0,
		css: "fridgelistsidebaritem-expired"
	},
]

class FridgeListItem extends Component {
  constructor(props) {
    super(props);
  }

  getStatus = () => {
		let css = "fridgelistsidebaritem-safe";
		const dateDif = this.props.expiration - Date.now();

		for (alert of alertThresh) {
			if (dateDif <= alert.threshold) {
				css = alert.css;
			}
		}

		return css;
  }

  render() {
    return (
      <div className={`fridgelistsidebaritem-box ${this.getStatus()}`}>
        <p className="fridgelistsidebaritem-text">qt. {this.props.qt}</p>
        <p className="fridgelistsidebaritem-text">{this.props.ingredientID}</p>
      </div>
    );
  }
}

export default FridgeListItem;
