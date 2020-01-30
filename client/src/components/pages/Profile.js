import React, { Component } from "react";
import { Link } from "@reach/router";
import { get } from "../../utilities";
import "../../utilities.css";
import "./Profile.css";
import { connect } from 'react-redux';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fridge_num: 0,
      shop_num: 0,
      expired_num: 0,
    }
    
    //this.calculateProfileStats = this.calculateProfileStats.bind(this)

  }

  componentDidMount() {
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));

    this.calculateProfileStats()
  }

  calculateProfileStats() {
    const { fridgeList, shopList } = this.props;

    const hasItems = fridgeList.length !== 0;

    if  (hasItems) {
      let fridge_num = fridgeList.length;
      let shop_num = shopList.length;
      let expired_num = 0;

      for (const item of fridgeList) {
        if (item.expiration <= Date.now) {
          expired_num += 1
        }
      }

      this.setState({
        fridge_num: fridge_num,
        expired_num: expired_num,
        shop_num: shop_num,
      });
    }

  }



  render() {
    if (!this.state.user) {
			return <div> Loading! </div>;
		}

    return (
      <>
        <div className="Profile-avatar u-textCenter"> </div>

        <div className= "Profile-name-container u-textCenter">
          <div className="Profile-name u-textCenter" >
            {this.state.user.name}
          </div>
        </div>

        <div className = "Profile-container">
        <div className="u-flex">

          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle"> Grocery Stats</h4>
            <div id="Grocery-stats">
              {this.state.shop_num} items on your shopping list.
            </div>
          </div>

          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">Fridge Stats</h4>
            <div id="Grocery-stats">
              {this.state.expired_num}/{this.state.fridge_num} items expired.
            </div>
          </div>

          {/*<div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">Cooking Stats</h4>
            <div id="Grocery-stats">
              {this.state.meal_num} meals cooked in the past week.
            </div>
          </div>
    */}
          
        </div>
        </div> 
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    fridgeList: state.fridgeList.fridgeList,
    shopList: state.shopList.shopList
  };
};

const mapDispatchToProps = (dispatch) => {
  return { };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);