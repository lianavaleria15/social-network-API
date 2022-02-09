const mongoose = require("mongoose");

//import models
const { User, Thought } = require("../models");

//import seed data
const users = require("./data/User");
const thoughts = require("./data/Thought");

//create init function of start of server

const init = async () => {
  try {
    //connect to social media DB
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Social media database connection successful");

    //seed users
    await User.deleteMany({});
    await User.insertMany(users);

    console.log("[INFO]: Users successfully seeded");

    //seed thoughts
    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);

    console.log("[INFO]: Thoughts successfully seeded");

    //get all users from DB
    const usersFromDb = await User.find({});

    //get all thoughts from DB
    const thoughtsFromDb = await Thought.find({});

    // map through thoughts; link thought to specific user
    const promises = thoughtsFromDb.map(async (thought) => {
      //get each thought's username
      const username = thought.username;

      //find user in userDB where thought userId matches user id
      const user = usersFromDb.find((user) => user.username === username);

      user.thoughts.push(thought._id.toString());

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    await Promise.all(promises);

    await mongoose.disconnect();
  } catch (error) {
    console.log(
      `[ERROR]: Social media database connection failed | ${error.message}`
    );
  }
};

init();
