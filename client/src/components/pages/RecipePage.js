import React, { Component } from "react";
import { get } from "../../utilities";

import "./RecipePage.css";

/**
 * Display recipe picture, title, and list of ingredients with quantities
 *
 * Proptypes
 * @param {string} recipeName
 */

const hardcode = {
    title: "Omelet",
    pic: "",
    desc: "scrambled>omelet",
    ingredients: [
        {
					name: "egg",
					qt: 4
        },{
					name: "bacon",
					qt:4
        },{
					name: "onion",
					qt:1
        }
    ]};

class RecipePage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    //get(`/api/recipe`, { name: this.props.recipeName }).then((recipe) => this.setState({ recipe: recipe }));
    //console.log(this.state.recipe);
  }

  render() {
    if (!this.state.recipe) {
			return <div> Loading! </div>;
		}

    let itemList = null;
    const hasItems = this.state.recipe.ingredients.length !== 0;
    if (hasItems) {
      itemList = this.state.recipe.ingredients
      .map((itemObj) => (
        <div className="recipe-ingredient">
					<span>{`qt. ${itemObj.qt}`}</span>
					<span>{itemObj.name}</span>
        </div>
      ));
    } else {
      itemList = <div>No items!</div>;
    }

    return (
      <div className="recipe-container">
				<div><div className="recipe-title">{this.state.recipe.title}</div></div>
				<img className="recipe-pic" src={this.state.recipe.pic} />
				<div className="recipe-list">{itemList}</div>
      </div>
    );
  }
}

export default RecipePage;
