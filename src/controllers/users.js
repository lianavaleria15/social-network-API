const { User } = require("../models/User");

const getUsers = (req, res) => {
  console.log("get users");
};

const getUserById = (req, res) => {
  console.log("get user by id");
};

const createUser = (req, res) => {
  console.log("create user");
};

const updateUser = (req, res) => {
  console.log("update user");
};

const deleteUser = (req, res) => {
  console.log("delete user");
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
