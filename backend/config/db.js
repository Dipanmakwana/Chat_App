const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGOURL);
    console.log(`Mongo DB Connected : ${connection.connection.host}`);
  } catch (error) {
    console.log("Error while connecting to db. ", error.message);
  }
};

module.exports = connectDB;
