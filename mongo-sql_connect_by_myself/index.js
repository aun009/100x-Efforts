
const express = require("express")
const bcrypt = require("bcrypt")
const zod = require("zod")
const {Pool} = require("pg")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")


const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_E6lyOPQneBb3@ep-falling-pine-apibwcll.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require"
})

// mongoose.connect("")

// // create schema

// const User = mongoose.Schema({
//     title : String
// })

// const userModel = mongoose.model("users", User)

// module.exports = {
//     userModel : userModel
// }

const app = express();

app.use(express.json())

// doing for the sql

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const hashedPassword = await bcrypt.hash(password, 10)

    // store this info to the database 
    await pool.query("insert into users(username, email, password) values($1, $2, $3)", [username, email, hashedPassword]);

    res.json({
        message : "Sign up done"
    })


})


app.post("/signin", async (req, res) => {
    const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    const userExists = await pool.query("select * from users where email=$1 and username=$2", [email, username]);

    if(!userExists) {
        res.status(403).json({
            message : "user with this email and username does not exist"
        })
    }

    const user = userExists.rows[0]

    const passCheck = await bcrypt.compare(password , user.password)

    const token = jwt.sign({
        username : username
    }, "arun123")

    // know here have a bug, if ! passscheck return invalid

    if(passCheck) {
        res.json({
            message : `${token} you are signed in successfully`
        })
    }

})

app.listen(3005)