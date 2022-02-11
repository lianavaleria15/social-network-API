const { Thought } = require("../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({
      success: true,
      data: thoughts,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get all thoughts" });
  }
};

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await User.findById(thoughtId);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get thought by id | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get thought by id" });
  }
};

const createThought = async (req, res) => {
  try {
    //get thoughts params from the req body
    const { thoughtText, username } = req.body;

    //create new thought
    const newThought = await Thought.create({ thoughtText, username });

    return res.json({
      success: "New thought successfully created",
      data: newThought,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new thought | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create new thought" });
  }
};

const updateThought = (req, res) => {
  console.log("get thoughts");
};

const deleteThought = (req, res) => {
  console.log("get thoughts");
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
