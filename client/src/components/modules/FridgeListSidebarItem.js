import React, { Component } from "react";
import "./FridgeListSidebarItem.css";
import { get } from "../../utilities";

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

class FridgeListSidebarItem extends Component {
  constructor(props) {
		super(props);
		
		this.state = {};
	}
	
	componentDidMount() {
		get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
    .then((ingredient) => {
			console.log(ingredient);
			console.log(ingredient.name);
      this.setState({name: ingredient.name});
    });
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
		let name = "loading";
		if (this.state.name) {
			name = this.state.name;
		}

    return (
      <div className={`fridgelistsidebaritem-box ${this.getStatus()}`}>
        <p className="fridgelistsidebaritem-text">qt. {this.props.qt}</p>
        <p className="fridgelistsidebaritem-text">{name}</p>
      </div>
    );
  }
}

export default FridgeListSidebarItem;
