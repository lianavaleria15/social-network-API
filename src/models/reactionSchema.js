const { Schema } = require("mongoose");
const { format } = require("date-fns");

//create reaction schema
const reactionSchema = {
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },

  username: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    get: formatTime,
  },
};

//format createdAt data
const formatTime = (date) => {
  return format(date, "dd-MM-yyyy HH:mm");
};

//create new reaction schema
const schema = new Schema(reactionSchema, { timestamp: true });

//export reaction schema
module.exports = schema;
