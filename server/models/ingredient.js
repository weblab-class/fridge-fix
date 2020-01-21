const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({
  name: String,
  exptime: Number
});

// compile model from schema
module.exports = mongoose.model("ingredient", IngredientSchema);
