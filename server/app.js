require('dotenv').config()
const express = require('express');
const app = express()
const db = require("./config/db.config");
const User = require("./model/user.model")
const router = require("./routes/mainroute")
const bodyParser = require("body-parser")

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router)

const port = process.env.PORT

app.listen(port, async()=>{
    // Connect to Database
    try{
        await db.authenticate()
        console.log("Connection to database has been established.")
      }
      catch(err){
        console.log(`${err} , Failed to Connect to Database`)
      }
    // Server Started
    console.log(`Server listening on port ${port}`)
    // Sync UserModel
    // await User.sync({force: true});
})


