import React, { Component } from "react";
import { Link } from "@reach/router";

import "./IngredientItem.css";

import { connect } from 'react-redux';
import * as fridgeListActions from "../../actions/fridgeListActions";
import * as shopListActions from "../../actions/shopListActions";

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

    this.state = {

    }
  }

  addItem = (event) => {
		const newItem = {
      ingredientID: this.props.ingredient.ingredientID,
      qt: 1,
      expiration: Date.now() + this.props.ingredient.exptime,
    }

    this.props.addFridgeItem(newItem);
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

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFridgeItem: (fridgeItem) => dispatch(fridgeListActions.addFridgeItem(fridgeItem)),
    addShopItem: (shopItem) => dispatch(shopListActions.addShopItem(shopItem)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(IngredientItem);
