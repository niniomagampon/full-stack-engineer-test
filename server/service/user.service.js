const { json } = require("body-parser");
const User = require("../model/user.model")
const hashpash = require("../utilities/hashpass");

const createUserService = async (payload) => {
    try {
        // Add hash password before passing data
        const hashedpass = await hashpash.hashedpass(payload.password)
        const createUser = await User.create({
            ...payload, password: hashedpass,
        })

        return {
            status: 200,
            message : "Registration Successful. Redirecting to Login",
            data: createUser.dataValues
        }

    } catch (err) {
        console.log(`Service Error : ${err}`)
        
        return {
            status: 500,
            message: "Internal Error found, Please contact support",
            data : ""
        }
    }
}

const loginUserService = async (payload) => {
    try {
        const loginUser = await User.findAll({
            where: { emailAddress: payload.emailAddress }
        })
        
        const data = loginUser[0].dataValues
        return {
                status: 200,
                message :"Login Successful",
                data
        }

    } catch (err) {
        console.log(`Service Error ${err}`)

        return {
            statuscode: 500,
            message: "Internal Error found, Please contact support"
        }
    }
}

module.exports = { createUserService, loginUserService }