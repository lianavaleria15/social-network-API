const { User } = require("../models");

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

const updateUser = (req, res) => {
  try {
  } catch (error) {}
};

const deleteUser = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
