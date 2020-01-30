import React, { Component } from "react";
import { Link } from "@reach/router";

import "./IngredientItem.css";
import { post } from "../../utilities";

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
      qt: 1
    }
  }

  addItem = (event) => {
		let body = {
      ingredientID: this.props.ingredient.ingredientID,
      qt: this.state.qt,
      expiration: Date.now() + this.props.ingredient.exptime*86400000,
    }
    console.log(body);
    if (this.props.targetList == 'fridge') {
      post(`/api/fridgeadd`, body).then( (res) => {
        if (res._id) {
          body._id = res._id;
          this.props.addFridgeItem(body)
        }
      });
    }
    else if (this.props.targetList == 'shop') {
      body.expiration = null;
      post(`/api/shopadd`, body).then( (res) => {
        if (res._id) {
          body._id = res._id;
          this.props.addShopItem(body)
        }
      });
    }
  }

  handleChange = (event) => {
    this.setState({qt: event.target.value});
  }

  render() {
    return (
			<div className="item-container">
				<div className="item-title">{this.props.ingredient.name}</div>
        <input
					className = "item-selector"
					type = "number"
					value = {this.state.qt}
					onChange = {this.handleChange}
					placeholder = "search recipes..."
				/>
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
