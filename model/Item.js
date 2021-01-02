var mongoose = require("mongoose");

var items_Schema = mongoose.Schema({
    productid:String,
    prName:String,
    prCatagory:String,
    prPrice:String,
    prDetails:String,
    prImage:String,
});

const Items = mongoose.model("Items", items_Schema);
module.exports = Items;

