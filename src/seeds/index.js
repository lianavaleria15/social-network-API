const mongoose = require("mongoose");

//import models
const { User } = require("../models/User");
const { Thought } = require("../models/Thought");

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

    console.log("[INFO]: Social media database connect successful");
  } catch (error) {
    console.log(
      `[ERROR]: Social media database connection failed | ${error.message}`
    );
  }
};

init();
