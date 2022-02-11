const { Thought } = require("../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({
      success: "Get all thoughts request successful",
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
    const thought = await Thought.findById(thoughtId);
    return res.json({ success: "Get thought by id request successful" });
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

const updateThought = async (req, res) => {
  try {
    //get id of thought to update
    const { userId } = req.params;

    //get fields to update from req
    const { thoughtText } = req.body;

    //update thought
    await Thought.findByIdAndUpdate(userId, {
      thoughtText,
    });

    return res.json({ success: "Thought successfully updated" });
  } catch (error) {
    console.log(`[ERROR]: Failed to update existent thought| ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update existent thought" });
  }
};

const deleteThought = async (req, res) => {
  try {
    //get id of user to delete
    const { thoughtId } = req.params;

    //delete user
    await Thought.findByIdAndDelete(thoughtId);

    return res.json({ success: "Thought successfully deleted" });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to delete existent thought | ${error.message}`
    );

    return res
      .status(500)
      .json({ success: false, error: "Failed to delete existent thought" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
};
