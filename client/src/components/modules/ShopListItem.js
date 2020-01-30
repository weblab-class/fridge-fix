import React, { Component } from "react";
import "./ShopListItem.css";
import { connect } from 'react-redux';
import * as fridgeListActions  from "../../actions/fridgeListActions"
import * as shopListActions from "../../actions/shopListActions"
import FridgeListItem from "./FridgeListItem";
import { get, post } from "../../utilities";

/**
 * display Fridge item qt and name, colored if there is an alert.
 *
 * Proptypes
 * @param {string} ingredientID
 * @param {string} qt
 * @param index
 * @param _id
 */


class ShopListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "loading",
      exptime: null
    };

  }

  componentDidMount() {
    get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
    .then((ingredient) => {
      this.setState({
        name: ingredient.name,
        exptime: ingredient.exptime
      });
    })
  }

  componentDidUpdate() {
    get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
    .then((ingredient) => {
      this.setState({
        name: ingredient.name,
        exptime: ingredient.exptime
      });
    })
  }

  deleteItem = () => {
    this.props.deleteShopItem(this.props.index);
    post(`/api/shopdelete`, {body: this.props._id}).then( (log) => {
      console.log(log);
    })
  }
  
  moveToFridge = () => {
    let body = {
      ingredientID: this.props.ingredientID,
      qt: this.props.qt,
      expiration: Date.now()+this.state.exptime*86400000
    };
    post(`/api/fridgeadd`, body).then( (res) => {
      if (res._id) {
        body._id = res._id;
        this.props.addFridgeItem(body)
      }
    });
    this.deleteItem();
  }



  render() {

		// let name = "loading";
		// if (this.state.name) {
		// 	name = this.state.name;
		// }

    return (
      <div className={`ShopListItem-box`}>
        <p className="ShopListItem-text ShopListItem-qt">{this.props.qt}</p>
        <p className="ShopListItem-text ShopListItem-name">{this.state.name}</p>
        {this.state.exptime ? (
          <>
          <div className="ShopListItem-buttonContainer"> 
            <button onClick={this.moveToFridge}> 
              Log 
            </button> 
          </div>
          </>
        ) : (
          <>
          <div className="ShopListItem-buttonContainer"> </div>
          </>
        )
        
        }
        <button 
					className="ShopListItem-delete"
					onClick={this.deleteItem}
				>X</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteShopItem: (index) => dispatch(shopListActions.deleteShopItem(index)),
    addFridgeItem: (fridgeItem) => dispatch(fridgeListActions.addFridgeItem(fridgeItem))
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopListItem);
