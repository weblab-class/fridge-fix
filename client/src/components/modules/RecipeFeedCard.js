import React, { Component } from "react";
import { Link } from "@reach/router";

import "./RecipeFeedCard.css";

/**
 * RecipeCard is a component for displaying content like stories
 *
 * Recipe: {title: “Omelet”, pic: imagelink, desc:””, ingredients: [{ingredientID: “”, qt}]}
 * 
 * 
 * Proptypes
 * @param {object} recipe
 * contains title,pic,desc
 */
class RecipeFeedCard extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    
  }

  render() {
    return (
      <Link to={`/recipe/${this.props.recipe.recipeID}`}>
        <div className="card-container">
          <div className="card-title">{this.props.recipe.name}</div>
          <div className="card-text">{this.props.recipe.desc}</div>
          <img className="card-pic" src="" />
        </div>
      </Link>
    );
  }
}

export default RecipeFeedCard;
