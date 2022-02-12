//import reactions schema
const { Reaction } = require("../models");

//create a reaction stored in a single thought array
const createReactionForThought = (req, res) => {
  console.log("create reaction");
};

//delete a reaction from reactions array by the reaction id value
const deleteReactionByThought = (req, res) => {
  console.log("delete reaction");
};

module.exports = { createReactionForThought, deleteReactionByThought };
