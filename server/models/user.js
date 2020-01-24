const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  fridgeList: [{
    ingredientID: Number,
    qt: Number,
    expiration: Date
  }]
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
