const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  ingredientID: Number,
  name: String,
  exptime: Number,
});

// compile model from schema
module.exports = mongoose.model("ingredient", IngredientSchema);
