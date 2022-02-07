//import schema & model from mongoose

//import thought model

//define user schema

//create new student schema

/*username (string, unique, required, trimmed)
  email (string, required, unique, must match a valid email address)
  thoughts (array of _id values referencing the though model)
  friends (array of _id values referencing the user model - self-reference)

  schema setting: create a virtual `friendCount` that retrieves user's friends array field length on query
  */

//export user model
