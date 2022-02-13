const { Schema } = require("mongoose");
const { format } = require("date-fns");

//format createdAt data
const formatTime = (date) => {
  return format(date, "dd-MM-yyyy HH:mm");
};

//create reaction schema
const reactionSchema = {
  reactionId: {
    type: Schema.Types.ObjectId,
  },
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

//create new reaction schema
const schema = new Schema(reactionSchema, { timestamp: true });

//export reaction schema
module.exports = schema;
