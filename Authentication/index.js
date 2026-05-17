

const express = require("express");
const jwt = require("jsonwebtoken")

const app = express();
const path = require("path");

app.use(express.json())

// creating for myself, 

const notes = [] // in memory
const users = [{
    username : "Arun",
    password : "123123"
}, {
    username : "Yash",
    password : "3rt3"
}]


app.post("/signup", (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;

    const userExist = users.find(user => user.username === userName);

    if(userExist) {
        return res.status(403).json({
            message : "user with this username already exist"
        })
    }

    users.push({
        username : userName, password : password
    })

    res.json({
        message : "you have signed up"
    })
})



app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExist = users.find(user => user.username === username && user.password === password);

    if(!userExist) {
        res.sendStatus(403).json({
            message : "Incorrect credentials"
        })
        return;
    }

    // hacker will know my token
    // json web token, it is stateless
    // if user sign in assign them this token, and in future user will give you this token to sign in 

    // const token = username + "121212"
    // res.json({
        
    // })


    const token = jwt.sign({
        username : username
    }, "arun123")

    res.json({
        token : token
    })
})

//create notes - Authenticated endpoint
app.post("/notes", (req, res) => {

    // check if the user sent right headers, extraact who the user is from header 
    const token = req.headers.token

    if(!token) {
        res.status(403).send({
            message : "You are not logged in"
        })

        return;
    }

    // if user sended us the token then verify them

    const decoded = jwt.verify(token, "arun123")

    const username = decoded.username; // here we got the username

    if(!username) {
        res.status(403).send({
            message : "Malformed token"
        })
        return;
    }

    const note = req.body.note;

    notes.push({note, username})

    res.json({
        message : "Done!"
    })

})

app.get("/", (req, res) => {
    res.sendFile("/home/arun/Desktop/cohort/js/Authentication/index.html")
})

app.get("/signup", (req, res) => {
    res.sendFile("/home/arun/Desktop/cohort/js/Authentication/signup.html")
})

app.get("/signin", (req, res) => {
    res.sendFile("/home/arun/Desktop/cohort/js/Authentication/signin.html")
})

app.get("/notes", (req, res) => {

    const token = req.headers.token

    if(!token) {
        res.status(403).send({
            message : "Your are not authenticated"
        })

        return
    }

    // here we got token, from the request
    const decoded = jwt.verify(token, "arun123");

    // extract the username from it
    const username = decoded.username;

    if(!username) {
        res.status(403).send({
            message : "Request malformed"
        })
        return;
    }

    // we are storing username and notes , so return notes as per the username

    const userNotes = notes.filter(note => note.username === username)

    res.json({
        notes : userNotes
    })
})

app.listen(3002)
// POST --> Create a note
// GET --> Get all my notes