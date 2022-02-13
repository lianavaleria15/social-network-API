const { Router } = require("express");

//import controllers
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users");

const friends = require("./friends");

const router = Router();

//get all users
router.get("/", getUsers);

//get a user by id and populated thought and friend data
router.get("/:userId", getUserById);

//post a new user
router.post("/", createUser);

//update a user by id
router.put("/:userId", updateUser);

//delete a user by id
router.delete("/:userId", deleteUser);

router.use("/:userId/friends", friends);

module.exports = router;
