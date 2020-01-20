import React, { Component } from "react";
import RecipeFeedCard from "./RecipeFeedCard.js";

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
			query: "",
    	results: hardcode
    }
  }

  handleChange = (event) => {
		this.setState({query: event.target.value});
	}

  render() {
		const {query} = this.state.query;
		
		let itemList = null;
    const hasItems = this.state.results.length !== 0;
    if (hasItems) {
      itemList = this.state.results
      .map((itemObj) => (
        <RecipeFeedCard
          recipe = {itemObj}
        />
      ));
    } else {
      itemList = <div>No results!</div>;
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
				<div className="recipefeed-results">{`${this.state.results.length} results`}</div>
				{itemList}
      </div>
    );
  }
}

export default RecipeFeed;
