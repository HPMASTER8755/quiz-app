const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const dotenv = require("dotenv");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://himp7890:password7890@recipes.odueiym.mongodb.net/quizDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected to Host: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDb;
