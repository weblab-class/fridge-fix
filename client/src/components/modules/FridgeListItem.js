import React, { Component } from "react";
import "./FridgeListItem.css";
import { get } from "../../utilities";

import { connect } from 'react-redux';
import * as fridgeListActions from "../../actions/fridgeListActions";

/**
 * display Fridge item qt and name, colored if there is an alert.
 *
 * Proptypes
 * @param index
 * @param {string} ingredientID
 * @param {string} qt
 * @param {string} expiration
 */
    
const alertThresh = [
	{
		threshold: 10000000, //~1day
		css: "fridgelistitem-warning"
	},
	{
		threshold: 0,
		css: "fridgelistitem-expired"
	},
]

class FridgeListItem extends Component {
  constructor(props) {
		super(props);
		
		this.state = {};
	}
	
	componentDidMount() {
		get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
    .then((ingredient) => {
      this.setState({name: ingredient.name});
    });
	}

  getStatus = () => {
		let css = "fridgelistitem-safe";
		const dateDif = this.props.expiration - Date.now();

		for (alert of alertThresh) {
			if (dateDif <= alert.threshold) {
				css = alert.css;
			}
		}

		return css;
	}
	
	deleteItem = () => {
		this.props.deleteFridgeItem(this.props.index);
		console.log("delete");
		console.log(this.props.index);
	}

  render() {
		let name = "loading";
		if (this.state.name) {
			name = this.state.name;
		}
		
    return (
      <div className={`fridgelistitem-box ${this.getStatus()}`}>
        <p className="fridgelistitem-text">qt. {this.props.qt}</p>
        <p className="fridgelistitem-text">{name}</p>
				<button 
					className="fridgelistitem-delete"
					onClick={this.deleteItem}
				>X</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { };
};

const mapDispatchToProps = (dispatch) => {
  return {
		deleteFridgeItem: (index) => dispatch(fridgeListActions.deleteFridgeItem(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeListItem);
