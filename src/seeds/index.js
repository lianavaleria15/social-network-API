const mongoose = require("mongoose");

//import models
const { User, Thought } = require("../models");

//import seed data
const user = require("./data/User");
const thought = require("./data/Thought");
const reaction = require("./data/Reaction");

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
    await User.insertMany(user);

    console.log("[INFO]: Users successfully seeded");

    //seed thoughts
    await Thought.deleteMany({});
    await Thought.insertMany(thought);

    console.log("[INFO]: Thoughts successfully seeded");
  } catch (error) {
    console.log(
      `[ERROR]: Social media database connection failed | ${error.message}`
    );
  }
};

init();
