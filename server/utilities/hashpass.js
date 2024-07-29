const bcrypt = require("bcrypt")

const hashedpass = async(payload)=>{
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(payload, salt)
    return hashed
}

const hashCompare = async(password, hashedpass)=>{
     return await bcrypt.compare(password, hashedpass)
}

module.exports = {hashedpass, hashCompare}