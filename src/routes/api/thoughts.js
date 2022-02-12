const { Router } = require("express");

//import controllers
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughts");

//import reactions route
const reactions = require("./reactions");

const router = Router();

//get all thoughts
router.get("/", getThoughts);

//get thought by id
router.get("/:thoughtId", getThoughtById);

//create a new thought
router.post("/", createThought);

//update a thought by id
router.put("/:thoughtId", updateThought);

//remove a thought by id
router.delete("/:thoughtId", deleteThought);

router.use("/:thoughtId/reactions", reactions);
//delete a reaction from reactions array by the reaction id value

module.exports = router;
