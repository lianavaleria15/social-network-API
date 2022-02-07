//import schema & model from mongoose

/*thoughtText(string, required, character length between 1-280)
   createdAt(date, default value to current timestamp, getter method to format the timestamp on query)
  username (user that created the thought, string, required)
  reactions (array of nested documents created with the reactionSchema)

  schema setting: create a virtual `reactionCount` that retrieves user's friends array field length on query
*/

//create reaction schema
//reactionId (Mongoose Object Id data type); default value set to new ObjectId
//reactionBody(string, required, max 280 characters)
//username (string, required)
//createdAt(date, default value to current time stamp, getter method to format the timestamp on query)

//define thought schema

//create new thought schema

//export user model
