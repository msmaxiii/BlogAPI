const express = require('express')
const User = require('../schema/userschema')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const authRouter = express.Router()

authRouter.get('/',(req,res)=>{
    res.status(200).json({message:'User created'})
})

authRouter.post('/register',async (req,res)=>{
    let user = req.body
    let password = user.password
    let username =user.username
    let salt = Number(process.env.SALT)
        if(!password || !username){
            res.status(400).json({message:"Please create a username and password"})
        } 
    let hashedPassword = await bcrypt.hash(password,salt)
    user.password = hashedPassword 

 User.create(user,(error,result)=>{
     if(error){
         res.status(400).json({message:error.message})
     }
     let token= jwt.sign(username,process.env.JWT_SECRET)
      res.setHeader('Authorization',token)
      res.status(200).json({message:"User OK",user:user})
 })
})

 authRouter.post('/login',(req,res)=>{
    
    let username = req.body.username
    let password = req.body.password
    let email = req.body.email
    let birthday =req.body.birthday
    let age = req.body.age

    if (!password || !username){
        res.status(400).json({message: "Please have a username AND password"})
    }
 


User.findOne({username: username}, (error, result)=>{
        if(error){
            res.status(400).json({message: error.message})
        }
        if(result === null || result === undefined){
            res.status(404).json({message: "User Not Found"})
        }
        // console.log(result)
    bcrypt.compare(password, result.password, (error, matching)=>{
            if(error){
                res.status(403).json({message: error.message})
            }
            if(matching === false){
                res.status(403).json({message: "Either username or password is incorrect"})
            }
            let token= jwt.sign(username,process.env.JWT_SECRET)
            res.setHeader('Autorization',token)
                         
            res.status(200).json({data: result})
        })
    
})

 })

module.exports = authRouter