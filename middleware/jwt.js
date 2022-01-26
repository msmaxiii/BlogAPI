const jwt =require('jsonwebtoken')

function verifyJWT(req,res,next){
    let token = req.get('Authorization')
        if (token===null|| token===undefined){
            res.status(403).json({message:"You must logged in"})
        }
        jwt.verify(token,process.env.JWT_SECRET,(error,result)=>{
            if(error){
                res.status(401).json({message:"Houston there's a problem"})
            }
            if (result===false){
                res.status(404).json({message:"User doesn't exit"})
            }
           next() 
        })
}
module.exports = verifyJWT