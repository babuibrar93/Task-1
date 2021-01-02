var mongoose = require('mongoose');


Mongo_url ="mongodb+srv://babuibrar0344:babuibrar0344@cluster0.yrvpo.mongodb.net/test";
  
  const connectDB = async()=> {
      await mongoose.connect(Mongo_url, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log("Connected To Mogoose---!!");
  }

  module.exports = connectDB;