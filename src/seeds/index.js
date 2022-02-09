const mongoose = require("mongoose");

//import models
const { User, Thought } = require("../models");

//import seed data
const user = require("./data/User");
const thought = require("./data/Thought");

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

    //get all users from DB
    const usersFromDb = await User.find({});

    //get all thoughts from DB
    const thoughtsFromDb = await Thought.find({});

    //map through thoughts; link thought to specific user
    thoughtsFromDb.map(async (thought) => {
      //get each thought's username
      const thoughtUsername = thought.username;

      //find user in userDB where thought userId matches user id
      const thoughtUser = usersFromDb.find((user) => {
        return user.username === thoughtUsername;
      });

      const userId = thoughtUser._id.toString();
      console.log(userId);
      const thoughtId = thought._id;

      thoughtUser.thoughts.push(thoughtId.toString());

      await User.findByIdAndUpdate(userId, { ...thoughtUser });
    });

    await mongoose.disconnect();
  } catch (error) {
    console.log(
      `[ERROR]: Social media database connection failed | ${error.message}`
    );
  }
};

init();
