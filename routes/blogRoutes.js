const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Blog = require('../schema/blogschema')
const verifyJWT = require ('../middleware/jwt')


const blogRouter = express.Router()

blogRouter.get('/',(req,res)=>{
    res.status(200).json({message:"User created"})
})
// get all the blogs from user/read
blogRouter.get('/:username',(req,res)=>{
    let username = req.body.username
        res.status(200).json({message: "All blogs from a user"})

    })
//     // create new blog
blogRouter.post('/:username',jwt.verifyJWT,(req,res)=>{
    let newBlogPost = {
    created_by:req.params.username,
    created_at: Date.now(),
    blog_title: req.body.blog_title,
    blog_content:req.body. blog_content,
    private: req.body.private,
}
if (error){
    res.status(400).json({message:error.message})
}
    res.status(200).json({message:error.message})

)}

 Blog.create(newBlogPost,(error,blog)=>{
     if (error){
         res.status(400).json({message:error.message})
     } 
        res.status(200).json({message:blog})
    })   

    // get a single id 
blogRouter.get('/:id', jwt.verifyJWT,(req,res)=>{
    let id = Number(req.params.id)
    if (id>=data.length || id < 0){
        res.status(404).json({message:"User not found"})
    }
        res.status(200).json({blog:data[id]})
})

 blogRouter.put('/:id',verifyJWT,(req,res)=>{
        let id = req.params.id
        Blog.findById(id,newBlog,(error,blog)=>{
            if(err){
                res.status(400).json({message:error.message})
            }
            res.status(200).json({message:(error.message)})    
        })
    
     })

blogRouter.delete('/:id',(req,res)=>{
  let id = req.params.id
    res.status(400).json({message:"error.message"})

        res.status(200).json({message:"Deleted"})
    })
 
module.exports = blogRouter