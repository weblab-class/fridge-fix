import React, { Component } from "react";

import "./RecipeFeedCard.css";

/**
 * RecipeCard is a component for displaying content like stories
 *
 * Recipe: {title: “Omelet”, pic: imagelink, desc:””, ingredients: [{ingredientID: “”, qt}]}
 * 
 * 
 * Proptypes
 * @param {string} _id of the recipe
 * @param {string} title
 * @param {link} pic
 * @param {string} desc of the recipe
 * @param {array} ingredients 
 */
class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card-container">
        <div className="Card-title">{this.props.title}</div>
        <div className="Card-text">You could cook this right now.</div>
        <img src={this.props.pic} />
      </div>
    );
  }
}

export default RecipeFeedCard;
