import React, { Component } from "react";
import IngredientItem from "./IngredientItem.js";
import { get } from "../../utilities";

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
    }
  }

  handleChange = async (event) => {
    await this.setState({query: event.target.value});
    this.queryIngredients();
  }

  componentDidMount() {
    this.queryIngredients();
  }
  
  queryIngredients = () => {
    get( `/api/search/ingredients`, {query: this.state.query})
    .then((ingredients) => this.setState({results: ingredients}));
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
					<IngredientItem
						ingredient = {itemObj}
						targetList = {this.props.targetList}
					/>
				));
        numResults = this.state.results.length;
      } else {
        itemList = <div>No results!</div>;
      }
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
				<div className="ingredientsearch-results">{`${numResults} results`}</div>
				{itemList}
      </div>
    );
  }
}

export default IngredientSearch;
