const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    isPromoted:Boolean
})
const userTab = mongoose.model("userTab",userSchema)
module.exports = userTab