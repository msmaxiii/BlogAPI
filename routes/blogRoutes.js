const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Blog = require('../schema/blogschema')
const verifyJWT = require ('../middleware/jwt')


const blogRouter = express.Router()

blogRouter.get('/',verifyJWT,(req,res)=>{

    res.status(200).json({message:"User created"})
})
// get all the blogs from user/read
blogRouter.get('/:username',(req,res)=>{
    let username = req.body.username
    Blog.find({username:username},(error,result)=>{
        if (error){
        res.status(400).json({message:error.message})
        }
        res.status(200).json({data:result})
    }) 

    })
//     // create new blog
blogRouter.post('/:username',verifyJWT,(req,res)=>{
    let newBlogPost = {
    created_by:req.params.username,
    blog_title: req.body.blog_title,
    blog_content:req.body.blog_content,
    private: req.body.private,
    }
    
 Blog.create(newBlogPost,(error,blog)=>{
     if (error){
         res.status(400).json({message:error.message})
     } 
        res.status(200).json({message:Newblog})
    })  
})   
    // get a single id 
blogRouter.get('/:id',verifyJWT,(req,res)=>{
    let id = Number(req.params.id)
    Blog.findById(id,newBlog,error,Blog)
    if (error){
        res.status(404).json({message:"ID not found"})
    }
        res.status(200).json({blog:data[id]})
})

 blogRouter.put('/:id',(req,res)=>{
        Blog.findByIdAndUpdate({_id:req.params.id},req.body,(error ,result)=>{
            if(error){
                res.status(400).json({message:"Bad request"})
                }
                res.status(200).json({data:result})    
            
        })
            
    
     })

blogRouter.delete('/:id',(req,res)=>{
  Blog.findByIdAndDelete({_id:req.params.id},(error,result)=>{
    if(error){
        res.status(404).json({message:"ID not found"})
        }
        res.status(200).json({message:"Deleted"})
        })
  })
  
 blogRouter.get('/',verifyJWT,(req,res)=>{
     Blog.find({_private:false},(error,result)=>{
        if(error){
            res.status(404).json({message:"No private blogs found"})
            }
            res.status(200).json({data:result})
            })   
     })
    

 
module.exports = blogRouter