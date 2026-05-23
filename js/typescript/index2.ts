
import express from "express";


const app = express();

interface SignUpInput {
    username : string,
    password : string
}

app.post("/signup", (req, res) => {
    const body : SignUpInput = req.body // it is simple if we simplify it , type is SignInput of body , and assign it value from the req
    // and these are compile time checks

    res.json({
        message : "Signed up"
    })
})