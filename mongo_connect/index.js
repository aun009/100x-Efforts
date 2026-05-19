
const express = require("express")
const { authMiddleWare } = require("./middleware")
const jwt = require("jsonwebtoken")

const { todoModel, userModel } = require("./models")


const app = express()

app.use(express.json())

let CURR_USER_ID = 1;
let CURR_TODOS_ID = 1;

const USERS = []
const TODOS = []

app.post("/signup", async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    // const userExist = USERS.find(u => u.username === username);
    const userExist = await userModel.findOne({
        username : username,
        password : password
    })

    if(!userExist) {
        // USERS.push({
        //     id : CURR_USER_ID++,
        //     username : username,
        //     password : password
        // })

        const newUser = await userModel.create({
            username : username,
            password : password
        })

        

        res.json({
            message : newUser._id
        })
    }

    res.status(403).json({
        message : "User already exist"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const userExist = USERS.find(u => u.username === username && u.password === password)

    if(!userExist) {
        res.status(403).json({
            message : "Wrong credentials"
        })
    }

    const token = jwt.sign({
        userId : userExist.id
    }, "arun123")
    res.json({
        token : token
    })

})

app.post("/todo", authMiddleWare , (req, res) => {
    const userId = req.userId
    const title = req.body.title
    const desc = req.body.desc

    TODOS.push({
        id : CURR_TODOS_ID++,
        title : title,
        desc : desc,
        userId : userId
    })

    res.json({
        message : "Todo created successfully"
    })
})

app.delete("/todo/:todoId", authMiddleWare, (req, res) => {
    // to delete todo , we want user id, todo id
    const userId = req.userId
    const todoId = req.params.todoId

    TODOS = TODOS.filter(t => t.userId == userId && t.id === todoId)

    if(TODOS) {
        res.json({
            message : "deleted"
        })
    }

    else {
        res.status(403).json({
            message : "Either todo does not exist or you are not the owner"
        })
    }
})

app.get("/todo", authMiddleWare, (req, res) => {
    const userId = req.userId
    const userTodos = TODOS.filter(t => t.userId === userId)

    res.json({
        todos : userTodos
    })
})


app.listen(3004)