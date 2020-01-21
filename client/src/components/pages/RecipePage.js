import React, { Component } from "react";
import { get } from "../../utilities";

import "./RecipePage.css";

/**
 * Display recipe picture, title, and list of ingredients with quantities
 *
 * Proptypes
 * @param recipeID
 */

class RecipePage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.recipeID);
    this.state = {
    }
  }

  componentDidMount() {
    let ingredients = [];
    get(`/api/recipe`, { recipeID: this.props.recipeID })
    .then((recipe) => this.setState({ recipe: recipe }))
    .then(() => { 
      if (this.state.recipe) {
        for (const ingredientObj of this.state.recipe.ingredients) {
          get(`/api/ingredient`, {ingredientID: ingredientObj.ingredientID})
          .then((ingredient) => {
            ingredients.push({
              name: ingredient.name,
              qt: ingredientObj.qt
            });
            this.setState({ingredients: ingredients});
          })
        }
      }
    })
  }

  render() {
    if (!this.state.recipe) {
			return <div> Loading! </div>;
    }
    
    let itemList = null;
    if (this.state.ingredients) {
      const hasItems = this.state.ingredients.length !== 0;
      if (hasItems) {
        itemList = this.state.ingredients
        .map((itemObj) => (
          <div className="recipe-ingredient">
            <span>{`qt. ${itemObj.qt}`}</span>
            <span>{itemObj.name}</span>
          </div>
        ));
      }
    } else {
      itemList = <div>Loading!</div>
    }

    return (
      <div className="recipe-container">
				<div><div className="recipe-title">{this.state.recipe.name}</div></div>
				<img className="recipe-pic" src="" />
				<div className="recipe-list">{itemList}</div>
      </div>
    );
  }
}

export default RecipePage;
