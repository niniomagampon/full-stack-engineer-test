const express = require("express")
const router = express.Router();
const { createUser, loginUser } = require("../controller/user.controller");
const {validateRegister, validateLogin} = require("../middleware/validation");

router.post("/register", validateRegister ,createUser),
router.post("/login", validateLogin ,loginUser)

module.exports = router