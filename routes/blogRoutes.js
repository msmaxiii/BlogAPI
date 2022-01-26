const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../schema/blogschema')
const verifyJWT = require ('../middleware/jwt')

const blogRouter = express.Router()

blogRouter.get('/',(req,res)=>{
    res.status(200).json({message:"User created"})
})

blogRouter.get('/:username',(req,res)=>{
    let username = req.body.username

User.create(user,(error,result)=>{
    if(error){
            res.status(400).json({message:error.message})
        }
         res.status(200).json({message:"User OK",user:user})
    })
blogRouter.post('/blog',(req,res)=>{
        let blog =req.body

blogRouter.get('/:id',(req,res)=>{
    let id = Number(req.params.id)
    if (id>=data.length || id < 0){
        res.status(404).json({message:"User not found"})
    }
        res.status(200).json({blog:data[id]})
})

blogRouter.put('/:id',jwt.authenticationToken,(req,res)=>{
        let id = req.params.id
        Blog.findByIDANDUpdate(id,newBlog,(error,blog)=>{
            if(err){
                res.status(400).json({message:error.message})
            }
            res.status(200).json({message:(error.message)})    
        }
    )
    })

blogRouter.delete('/:id',(req,res)=>{
  let id = req.params.id
    res.status(404).json({message:"Why are you deleting me"})
})
        res.status(204).json({message:"Deleted"})
    })
})  
module.exports = blogRouter