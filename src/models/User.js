//import schema & model from mongoose
const { Schema, model, Mongoose } = require("mongoose");

//import mongoose validate email library
const MongooseEmail = require("mongoose-type-email");

//import thought model
const thoughts = require("./Thought");

//define user schema
const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: MongooseEmail.SchemaTypes.Email,
    required: true,
    unique: true,
  },

  //thoughts (array of _id values referencing the though model)
  thoughts: [thoughts],

  //friends (array of _id values referencing the user model - self-reference)
  friends: [
    {
      _id: String,
    },
  ],

  //schema setting: create a virtual `friendCount` that retrieves user's friends array field length on query
};

//create new student schema
const schema = new Schema(userSchema);

const User = model("user", schema);

//export user model
module.exports = User;
