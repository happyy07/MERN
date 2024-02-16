const mongoose = require("mongoose");
// const mongoDbClient = require("mongodb").MongoClient

const mongoURI =
  "mongodb+srv://goFood:HappyGoFood@merncluster.5hhxnuh.mongodb.net/goFoodMernDB?retryWrites=true&w=majority";

module.exports = function (callback) {
  mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
    // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("---" + err);
    else {
      // var database =
      console.log("connected to mongo");
      const foodCollection = await mongoose.connection.db.collection(
        "food_items"
      );
      foodCollection.find({}).toArray(function (err, data) {
        if (err) {
          console.log("error=>", err);
        } else {
          console.log("");
        }
      });
      // listCollections({name: 'food_items'}).toArray(function (err, database) {
      // });
      //     module.exports.Collection = database;
      // });
    }
  });
};
