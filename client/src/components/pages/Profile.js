import React, { Component } from "react";
import { get } from "../../utilities";

import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //hard coded, will need to get this from Fridge, Grocery, and Cooking stats
      shopping_num: 5,
      expired_num: 10,
      fridge_num: 20,
      meal_num: 4,
    }
  }

  componentDidMount() {
    get(`/api/user`, { userid: this.props.userId }).then((user) => this.setState({ user: user }));
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
              {this.state.shopping_num} items on your shopping list.
            </div>
          </div>

          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">Fridge Stats</h4>
            <div id="Grocery-stats">
              {this.state.expired_num}/{this.state.fridge_num} items expired.
            </div>
          </div>

          <div className="Profile-subContainer u-textCenter">
            <h4 className="Profile-subTitle">Cooking Stats</h4>
            <div id="Grocery-stats">
              {this.state.meal_num} meals cooked in the past week.
            </div>
          </div>
          
        </div>
        </div> 
      </>
    );
  }
}

export default Profile;
