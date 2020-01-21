const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  name: String,
  src: String,
  ingredients: [{
    name: String,
    qt: Number
  }]
});

// compile model from schema
module.exports = mongoose.model("ingredient", RecipeSchema);
