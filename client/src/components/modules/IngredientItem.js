import React, { Component } from "react";
import { Link } from "@reach/router";

import "./IngredientItem.css";

/**
 * display ingredient, with a button to add it to the targetList and a qt. field.
 * 
 * 
 * Proptypes
 * @param {object} ingredient
 * contains title
 * @param {string} targetList
 */
class IngredientItem extends Component {
  constructor(props) {
    super(props);
  }

  addItem = (event) => {
		console.log("added")
  }
  
  render() {
    return (
			<div className="item-container">
				<div className="item-title">{this.props.ingredient.title}</div>
				<button 
					className="item-add"
					onClick={this.addItem}
				>+</button>
			</div>
    );
  }
}

export default IngredientItem;
