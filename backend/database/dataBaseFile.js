let mongoose = require("mongoose");

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