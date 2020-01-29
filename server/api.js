/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Ingredient = require("./models/ingredient")
const Recipe = require("./models/recipe")

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socket = require("./server-socket");

router.get("/ingredient", (req, res) => {
  Ingredient.findOne({ingredientID: req.query.ingredientID}).then((ingredient) => res.send(ingredient));
})
router.get("/recipe", (req, res) => {
  Recipe.findOne({recipeID: req.query.recipeID}).then((recipe) => res.send(recipe));
})


router.get("/search/ingredients", (req, res)=> {
  Ingredient.find(
    {name: new RegExp('^'+req.query.query, "i")} 
  ).then( (ingredients) => {
    res.send(ingredients)
  })
})

{/*router.get("/search/ingredients", (req, res)=> {
  Ingredient.find(
    {name: new RegExp('^'+req.query.query+'$', "i")} 
  ).then( (ingredients) => {
    res.send(ingredients)
  })

})
*/}

{/*router.get("/search/ingredients", (req, res)=> {
  Ingredient.find(
    {"name": {$regex : `^${req.query.query}`}} 
  ).then( (ingredients) => {
    res.send(ingredients)
  })
})*/}

//stripped to just return all recipes
router.get("/search/recipes", (req, res) => {
  if (req.query.query.length == 0) {
    Recipe.find({}).then((recipes) => res.send(recipes));
  } else {
    res.send([]);
  }
})

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    // user is not logged in
    res.send({});
  }
});



router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user) socket.addUser(req.user, socket.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
