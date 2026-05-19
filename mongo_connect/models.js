
const mongoose = require("mongoose");

// mongoose schema and model object

mongoose.connect("")

const Schema = mongoose.Schema;

const User = Schema({
    name : String,
    password : String
})


const Todos = Schema({
    title : String,
    description : String,
    userId : mongoose.Types.ObjectId
})

// above schema is just structure

const userModel = mongoose.model("users", User);
const todoModel = mongoose.model("todos", Todos)

module.exports = {
    userModel : userModel,
    todoModel : todoModel
}