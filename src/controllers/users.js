const { User } = require("../models");
const user = require("../seeds/data/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({
      success: true,
      message: "Get all users request successful",
      data: users,
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
    const user = await User.findById(userId);
    return res.json({ success: true, data: user });
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
    const newUser = await User.create({ username, email });

    return res.json({ success: true, data: newUser });
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

    //get fields to update from req
    const { username, email } = req.body;

    //update user
    const userToUpdate = await User.findByIdAndUpdate(userId, {
      username,
      email,
    });

    return res.json({ success: true, data: userToUpdate });
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
    const userToDelete = await User.findByIdAndDelete(userId);
    return res.json({ success: "User successfully deleted" });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete existent user | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete existent user" });
  }
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
