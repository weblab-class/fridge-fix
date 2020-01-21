const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  recipeID: Number,
  name: String,
  desc: String,
  src: String,
  ingredients: [{
    ingredientID: Number,
    qt: Number
  }]
});

// compile model from schema
module.exports = mongoose.model("recipe", RecipeSchema);
