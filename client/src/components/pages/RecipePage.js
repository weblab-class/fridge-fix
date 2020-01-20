import React, { Component } from "react";

import "./RecipePage.css";

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
  }

  componentDidMount() {

  }

  render() {
    let itemList = null;
    const hasItems = hardcode.ingredients.length !== 0;
    if (hasItems) {
      itemList = hardcode.ingredients
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
				<div><div className="recipe-title">{hardcode.title}</div></div>
				<img className="recipe-pic" src={hardcode.pic} />
				<div className="recipe-list">{itemList}</div>
      </div>
    );
  }
}

export default RecipePage;
