

import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username : String,
    password : String
})

// this above is just schema, means structure

export const userModel = mongoose.model("user", UserSchema)

// or can also export like export default userModel, then also import it default -> means dont use brackets
