//import schema & moment js from mongoose
const { Schema } = require("mongoose");
const { format } = require("date-fns");

//get current time stamp
const now = new Date();

const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  //   createdAt(date, default value to current timestamp, getter method to format the timestamp on query)
  createdAt: {
    type: Date,
    default: format(now, "dd-MM-YYYY HH:mm"),
  },

  //username (user that created the thought, string, required)
  username: {
    type: String,
    required: true,
  },

  //reactions (array of nested documents created with the reactionSchema)
  reactions: [],

  //schema setting: create a virtual `reactionCount` that retrieves user's friends array field length on query
  reactionCount: {},
};

//create reaction schema
//reactionId (Mongoose Object Id data type); default value set to new ObjectId
//reactionBody(string, required, max 280 characters)
//username (string, required)
//createdAt(date, default value to current time stamp, getter method to format the timestamp on query)

//define thought schema

//create new thought schema
const schema = new Schema(thoughtSchema);

//export user model
module.exports = schema;
