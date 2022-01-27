const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{type:String, require:true},
    password:{type:String,require:true},
    email:{type:String, require:true},
    birthday:{type:Date,require:true},
    age: {type:Number,require:true}
})

const userModel = mongoose.model("User",userSchema)

module.exports = userModel