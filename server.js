const express = require('express')
const bcrypt = require('bcrypt')
const bodyParser = require('body-Parser')
const helmet = require('helmet')
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongooseConnect = require('./config')
const jwt = require('jsonwebtoken')
const verifyJWT = require('./middleware/jwt')
const authRouter = require('./routes/authRoutes')
const blogRouter = require('./routes/blogRoutes')

dotenv.config()
const app = express()

const port = 4000 || process.env.PORT

// app.use(helmet())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/auth',authRouter)
app.use('/blog',blogRouter)


app.get('/',(req,res)=>{
    res.status(200).json({message:'API IS UP'})
})


app.listen(port,()=>{
    mongooseConnect()
    console.log(`Welcome server is listening at ${port}`);
})