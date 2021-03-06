import React, { Component } from "react";
import "./FridgeListItem.css";
import { get, post } from "../../utilities";

import { connect } from 'react-redux';
import * as fridgeListActions from "../../actions/fridgeListActions";

/**
 * display Fridge item qt and name, colored if there is an alert.
 *
 * Proptypes
 * @param index
 * @param _id
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
		
		this.state = {
			name: "loading"
		};
	}
	
	componentDidMount() {
		get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
    .then((ingredient) => {
			this.setState({name: ingredient.name});
    });
	}

	componentDidUpdate() {
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
		post(`/api/fridgedelete`, {body: this.props._id}).then( (log) => {
			console.log(log);
		});
	}

  render() {		
    return (
      <div className={`fridgelistitem-box ${this.getStatus()}`}>
        <p className="fridgelistitem-text">qt. {this.props.qt}</p>
        <p className="fridgelistitem-text">{this.state.name}</p>
		<p className="fridgelistitem-text">{Math.floor((this.props.expiration - Date.now())/86400000)}</p>
		{/* {console.log(typeof this.props.expiration)} */}
		{/* {console.log(Date.now())} */}
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
