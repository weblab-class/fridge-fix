import React, { Component } from "react";

import "../../utilities.css";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      //hard coded, will need to get this from Fridge, Grocery, and Cooking stats
      shopping_num: 5,
      expired_num: 10,
      fridge_num: 20,
      meal_num: 4,
    }
  }

  render() {
    return (
      <>
          <div className="Profile-avatar u-textCenter"> </div>

          <div className= "Profile-name-container u-textCenter">
            <div className="Profile-name u-textCenter" >
              {/*this.state.user.name*/}
              Hungry Luna 
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
