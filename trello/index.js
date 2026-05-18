
// design database first

const express = require("express")
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");


let USER_ID = 1
let ORGANIZATION_ID = 1;
let BOARD_ID = 1;
let ISSUE_ID = 1;

const usesrs = []
const organisations = []
const boards = []
const issues = []

const app = express();
app.use(express.json())

// write all the routes

// CREATE 
app.post("/signup", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const userExist = usesrs.find(user => usesrs.username == username);

    if(userExist) {
        res.status(411).json({
            message : "User already exist with this username"
        })
        return
    }

    usesrs.push({
        username, 
        password,
        id : USER_ID++
    })


    res.json({
        message : "You have signed up successfully"
    })

})


app.post("/signin", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    const userExist = usesrs.find(user => user.username === username && user.password === password);

    if(!userExist) {
        
        res.status(403).json({
            message : "Incorrect credentials"
        })
    }

    // create token for the user
    const token = jwt.sign({
        userId : userExist.id
    }, "arun123")

    res.json({
        token : token
    })

})


// AUTHENTICATED ROUTE --> MIDDLEWARE
app.post("/organization", authMiddleware ,(req, res) => {
    const userId = req.userId
    organisations.push({
        id : ORGANIZATION_ID++,
        title: req.body.title,
        description : req.body.description,
        admin : userId,
        members : []
    })


    res.json({
        message : "org created",
        id : ORGANIZATION_ID-1
    })
})

app.post("/add-members-to-organization", (req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUserUsername = req.body.memberUserUsername;

    const organization = organisations.find(org => org.id === organizationId);


    if(!organization || organization.admin !== userId) {
        res.status(411).json({
            message : "Either this org not exist or you are not the admin of this org"
        })
    }

    const memberUser = usesrs.find(user => user.username === memberUserUsername);

    if(!memberUser) {
        res.status(411).json({
            message : "User with this username dosent exist"
        })
    }

    const alreadyExist = organisations.members.find(m1 => m1.id === memberUser.id);

    res.status(411).json({
        message : "User is already in the organisation"
    })

    organisations.members.push(memberUser.id)

    res.json({
        message : "New member added"
    })
})

app.post("/issue", (req, res) => {

})

app.post("/board", (req, res) => {

})


// READ

app.get("/boards", (req, res) => {

})

app.get("/issues", (req, res) => {
    
})

app.get("/members", (req, res) => {

})

app.put("/issues", (req, res) => {

})


app.delete("/members", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUserUsername = req.body.memberUserUsername;

    const organization = organisations.find(org => org.id === organizationId);


    if(!organization || organization.admin !== userId) {
        res.status(411).json({
            message : "Either this org not exist or you are not the admin of this org"
        })
    }

    const memberUser = usesrs.find(user => user.username === memberUserUsername);

    if(!memberUser) {
        res.status(411).json({
            message : "User with this username dosent exist"
        })
    }

    organization.members = organization.members.filter(user => user.id !==memberUser.id)
})


app.listen(3006)

