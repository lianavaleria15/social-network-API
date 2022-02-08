//import schema & moment js from mongoose
const { Schema, model } = require("mongoose");
const { format } = require("date-fns");

const reactionSchema = require("./reactionSchema");

//util function to format time for created at
const formatTime = (date) => {
  return format(date, "dd-MM-yyyy HH:mm");
};

//define thought schema
const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },

  createdAt: {
    type: Date,
    get: formatTime,
    default: Date.now,
  },

  //username (user that created the thought, string, required)
  username: {
    type: String,
    required: true,
  },

  //reactions (array of nested documents created with the reactionSchema)
  reactions: [reactionSchema],
};

//create new thought schema
const schema = new Schema(thoughtSchema, { timestamps: true });

//schema setting: create a virtual `reactionCount` that retrieves user's friends array field length on query
schema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", schema);

//export user model
module.exports = Thought;
