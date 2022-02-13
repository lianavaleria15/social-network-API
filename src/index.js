const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

const init = async () => {
  try {
    //connect to db
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDB", {
      // userNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Social media database connection successful");

    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(
      `[ERROR]: Social media database connection failed | ${error.message}`
    );
  }
};

init();
