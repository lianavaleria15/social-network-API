//import reactions schema
const { Thought } = require("../models");

//create a reaction stored in a single thought array
const createReactionForThought = async (req, res) => {
  try {
    //get reaction data from req body
    const { reactionBody, username } = req.body;

    //get thought id from req params
    const thoughtId = req.params;

    //get all thoughts from DB
    const thoughtsFromDb = await Thought.find({});

    //find thought in thoughts array where id matches current id
    const thought = thoughtsFromDb.find((thought) => (thought._id = thoughtId));

    //push new reaction in reactions array for the current thought, this doesn't work
    thought.reactions.push({ reactionBody, username });

    //push new reaction inside the reactions array for that thought id
    await Thought.findByIdAndUpdate(thought._id, { ...thought });

    return res.json({ success: "New reaction successfully added" });
  } catch (error) {
    console.log(
      `[ERROR]: Failed to create a new reaction for present thought | ${error.message}`
    );
    return res.status(500).json({
      success: false,
      error: "Failed to create a new reaction for present thought",
    });
  }
};

//delete a reaction from reactions array by the reaction id value
const deleteReactionByThought = (req, res) => {
  console.log("delete reaction");
};

module.exports = { createReactionForThought, deleteReactionByThought };
