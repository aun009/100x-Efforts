
const mongoose = require("mongoose");

// mongoose schema and model object

mongoose.connect("mongodb+srv://arun:arun1212@100xapps.jo66fd0.mongodb.net/todo")

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