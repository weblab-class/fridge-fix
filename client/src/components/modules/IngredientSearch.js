import React, { Component } from "react";
import IngredientItem from "./IngredientItem.js";

import "./IngredientSearch.css";

/**
 * Display matching ingredients with ability to add to targetList
 * 
 * 
 * Proptypes
 * @param {string} targetList
 */

const hardcode = 
[{title: "Egg",
pic: "",
desc: "yellow",
exptime: 140000},
{title: "Bacon",
pic: "",
desc: "red",
exptime: 3000},]

class IngredientSearch extends Component {
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
		let itemList = null;
    const hasItems = this.state.results.length !== 0;
    if (hasItems) {
      itemList = this.state.results
      .map((itemObj) => (
        <IngredientItem
					ingredient = {itemObj}
					targetList = {this.props.targetList}
        />
      ));
    } else {
      itemList = <div>No results!</div>;
    }
      
    return (
      <div className = "ingredientsearch-container">
				<input
					className = "ingredientsearch-searchbar"
					type = "text"
					value = {this.state.query}
					onChange = {this.handleChange}
					placeholder = "search ingredients..."
				/>
				<div className="ingredientsearch-results">{`${this.state.results.length} results`}</div>
				{itemList}
      </div>
    );
  }
}

export default IngredientSearch;
