const mongoose = require("mongoose");


const MONGOURI = "mongodb+srv://babuibrar0344:babuibrar0344@cluster0.yrvpo.mongodb.net/test";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
