
const mongoose = require("mongoose");

// mongoose schema and model object

const Schema = mongoose.Schema;

const User = Schema({
    name : String,
    password : String
})


const Todos = Schema({
    title : String,
    description : String
})

// above schema is just structure