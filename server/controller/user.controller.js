const UserService = require("../service/user.service") 


const createUser = async (req, res)=>{
    try{
        const result = await UserService.createUserService(req.body)

        return res.status(result.status).json({
                message : result.message,
                data : result.data
            })
    
    }catch(err){
        console.log(`Unexpected Error :${err}`)

        res.status(500).json({
            message : `Internal Server Error`
        })
    }
}

const loginUser = async (req, res) =>{
    try{
        const result = await UserService.loginUserService(req.body)

            return res.status(result.status).json({
                message: result.message,
                data : result.data
            })
    }catch(err){
        console.log(`Unexpected Error :${err}`)

        res.status(500).json({
            message : `Internal Server Error`
        })
    }
}

module.exports = { createUser,loginUser }
