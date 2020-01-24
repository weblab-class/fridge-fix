import React, { Component } from "react";
import { Link } from "@reach/router";
import FridgeListSidebarItem from "./FridgeListSidebarItem.js";
import "./FridgeListSidebar.css";
import { get } from "../../utilities";
import { connect } from 'react-redux';

/**
 * display fridge list items sorted by expiration. Also display navbutton
 *
 * Proptypes
 * none
 */

class FridgeListSidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  componentDidMount() {  }

  render() {
    const { fridgeList } = this.props;
    let itemList = null;
    
    const hasItems = fridgeList.length !== 0;
    if (hasItems) {
			itemList = fridgeList
			.sort((a,b) => {
				return a.expiration-b.expiration;
			})
			.map((itemObj) => (
				<FridgeListSidebarItem
					ingredientID = {itemObj.ingredientID}
					qt = {itemObj.qt}
					expiration = {itemObj.expiration}
				/>
			));
		} else {
			itemList = <div>Empty fridge!</div>;
		}

    return (
      <div className="fridgelistsidebar-box">
        <h1 className="fridgelistsidebar-title">Fridge Alerts</h1>
        <div className="fridgelistsidebar-line"></div>
        <Link to="/fridge/" className="fridgelistsidebar-button">
          Open Fridge
        </Link>
        {itemList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fridgeList: state.fridgeList.fridgeList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(FridgeListSidebar);
