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
      foodCollection.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection(
          "foodCategory"
        );

        foodCategory.find({}).toArray(function (err, foodCategoryData) {
          if (err) {
            console.log("error=>", err);
          } else {
            global.food_items = data;
            global.food_Category = foodCategoryData;
          }
        });
      });
      // listCollections({name: 'food_items'}).toArray(function (err, database) {
      // });
      //     module.exports.Collection = database;
      // });
    }
  });
};
