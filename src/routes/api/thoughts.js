const { Router } = require("express");
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

//import controllers

const router = Router();

//get all thoughts
router.get("/", getThoughts);

//get thought by id
router.get("/:thoughtId", getThoughtById);

//create a new thought
router.post("/", createThought);

//update a thought by id
router.put("/:userId", updateThought);

//remove a thought by id
router.delete("/:userId", deleteThought);

//create a reaction stored in a single thought array

//delete a reaction from reactions array by the reaction id value

module.exports = router;
