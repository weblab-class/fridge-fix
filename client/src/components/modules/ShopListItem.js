import React, { Component } from "react";
import "./ShopListItem.css";
import { connect } from 'react-redux';
import * as fridgeListActions  from "../../actions/fridgeListActions"
import * as shopListActions from "../../actions/shopListActions"
import FridgeListItem from "./FridgeListItem";
import { get } from "../../utilities";

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
    this.state = {};

  }

  componentDidMount() {
    if (this.props.ingredientID!==' ') {
      console.log('trying to find name');
      get( `/api/ingredient`, {ingredientID: this.props.ingredientID})
      .then((ingredient) => {
        this.setState({
          name: ingredient.name,
          exptime: ingredient.exptime
        });
      });
    } else {this.setState({
      name: '    ',
      exptime: null
    })};
  }
  
  moveToFridge = () => {
    let fridgeItem = {
      ingredientID: this.props.ingredientID,
      qt: this.props.qt,
      expiration: Date.now()+this.state.exptime 
    };
    console.log('made the item');
    console.log(fridgeItem);
    this.props.addFridgeItem(fridgeItem);
    console.log('put into fridge');
    this.props.deleteShopItem(this.props.index);
    console.log('yeeted out of shoplist');
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
