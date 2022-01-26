const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    created_by:{type:String,required:true},
    created_on:{type:String,required:true},
    blog_title:{type:String,required:true},
    blog_content:{type:String,required:true},
    private:Boolean

})
const blogModel = mongoose.model("blog",blogSchema)

module.exports = blogModel

