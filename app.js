require("dotenv").config();
const express = require('express')
const app = express()
const cors = require('cors')
const userRoute = require('./routes/users.route')
require('./config/database')
// const usersData = require('./models/data.json')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(userRoute)

module.exports=app;