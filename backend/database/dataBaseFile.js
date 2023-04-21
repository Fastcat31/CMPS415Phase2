let mongoose = require("mongoose");
let database;

/*
const dataBaseFile = () => {
  mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
  }, (error) => {
    if (error) {
      console.log(`Database failed to connected: ${error}`);
    } else {
      console.log("Database connected.");
    }
  });
};
*/

const dataBaseFile = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
    });
    console.log("Database connected.");
  } catch (error) {
    console.log(`Database failed to connected: ${error}`);
  }
};

module.exports = dataBaseFile