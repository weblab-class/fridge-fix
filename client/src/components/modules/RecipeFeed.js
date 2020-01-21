import React, { Component } from "react";
import RecipeFeedCard from "./RecipeFeedCard.js";
import { get } from "../../utilities";

import "./RecipeFeed.css";

/**
 * RecipeCard is a component for displaying content like stories
 *
 * Display query+#results
 * 
 * 
 * Proptypes
 * none
 */

const hardcode = 
[{title: "Omelet",
pic: "",
desc: "scrambled>omelet"},
{title: "Steak",
pic: "",
desc: "but it's made out of eggs instead"}]

class RecipeFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
			query: ""
    }
  }

  handleChange = async (event) => {
    await this.setState({query: event.target.value});
    console.log("changed to"+this.state.query.length);
    this.queryRecipes();
  }
  
  componentDidMount() {
    this.queryRecipes();
  }

  queryRecipes = () => {
    get( `/api/search/recipes`, {query: this.state.query})
    .then((recipes) => this.setState({results: recipes}));
  }

  render() {
    let itemList = null;
    let numResults = 0;
    
    if (!this.state.results) {
			itemList = <div> Loading! </div>;
    } else {
      const hasItems = this.state.results.length !== 0;
      if (hasItems) {
        itemList = this.state.results
        .map((itemObj) => (
          <RecipeFeedCard
            recipe = {itemObj}
          />
        ));
        numResults = this.state.results.length;
      } else {
        itemList = <div>No results!</div>;
      }
    }
      
    return (
      <div className = "recipefeed-container">
				<input
					className = "recipefeed-searchbar"
					type = "text"
					value = {this.state.query}
					onChange = {this.handleChange}
					placeholder = "search recipes..."
				/>
				<div className="recipefeed-results">{`${numResults} results`}</div>
				{itemList}
      </div>
    );
  }
}

export default RecipeFeed;
