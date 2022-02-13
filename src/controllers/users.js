const { User } = require("../models");
const user = require("../seeds/data/User");

const getUsers = async (req, res) => {
  try {
    const data = await User.find({}).populate("thoughts").populate("friends");
    return res.json({
      success: true,
      data,
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get all users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = await User.findById(userId)
      .populate("thoughts")
      .populate("friends");
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user by id | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get user by id" });
  }
};

const createUser = async (req, res) => {
  try {
    //get user params from req body
    const { username, email } = req.body;

    //create new user
    const data = await User.create({ username, email });

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create new user | ${error.message}`);

    return res
      .status(500)
      .json({ success: false, error: "Failed to create new user" });
  }
};

const updateUser = async (req, res) => {
  try {
    //get id of user to update
    const { userId } = req.params;

    //update user
    const data = await User.findByIdAndUpdate(
      userId,
      {
        ...req.body,
      },
      { new: true }
    );

    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to update existent user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to update existent user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    //get id of user to delete
    const { userId } = req.params;

    //delete user
    const data = await User.findByIdAndDelete(userId);
    return res.json({ success: true, data });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete existent user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete existent user" });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
