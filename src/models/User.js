//import schema & model from mongoose
const { Schema, model, mongoose } = require("mongoose");

//import mongoose validate email library
require("mongoose-type-email");

//define user schema
const userSchema = {
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: Schema.Types.Email,
    required: true,
    unique: true,
  },

  //thoughts (array of _id values referencing the though model)
  thoughts: [{ type: Schema.Types.ObjectId, ref: "Thought" }],

  //friends (array of _id values referencing the user model - self-reference)
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

//create new student schema
const schema = new Schema(userSchema);

//schema setting: create a virtual `friendCount` that retrieves user's friends array field length on query
schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", schema);

//export user model
module.exports = User;
