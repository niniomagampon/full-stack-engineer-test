const express = require("express")
const router = express.Router();
const userrouter = require("./user.router")
router.get("/", (req,res)=>{
    res
    .status(200)
    .json({
        "Title" : "This is the main page",
        "Description" : "Homepage"
    })
})

// User Router

router.use("/auth", userrouter)

module.exports = router