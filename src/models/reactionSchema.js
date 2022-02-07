const { Schema } = require("mongoose");
const { format } = require("date-fns");

//create reaction schema
const reactionSchema = {
  reactionBody: { type: String, required: true, maxLength: 280 },
  username: { type: String, required: true },
};
//reactionId (Mongoose Object Id data type); default value set to new ObjectId
//reactionBody(string, required, max 280 characters)
//username (string, required)
//createdAt(date, default value to current time stamp, getter method to format the timestamp on query)
