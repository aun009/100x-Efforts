import express from "express"
import bcrypt from "bcrypt"
import { z } from "zod"
import { PrismaClient } from "@prisma/client"   // Prisma v5 — simple, no adapter needed
import jwt from "jsonwebtoken"

const app = express()
const client = new PrismaClient()               // reads DATABASE_URL from .env automatically

app.use(express.json())

// after defining this things, 
// 1) implement the zod schema 

const signUpSchema = z.object({
    username: z
        .string()
        .min(3, "Username must be at least 3 characters")
        .max(50, "username cant be htis long"),

    password: z
        .string()
        .min(6, "Passwrd must br at least 6 characters")
})


// 2) implement the routes
app.post("/signup", async (req, res) => {

    // 3) Validate input with zod
    const { data, success, error } = signUpSchema.safeParse(req.body)

    if (!success) {
        res.status(400).json({
            message: "Input invalid",
            error: error
        })
        return;
    }

    // 4) Get the validated values from Zod's result — NOT from req.body again!
    // data.username and data.password are already clean and typed as strings
    const { username, password } = data

    // 5) Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // 6) Push to the database using Prisma

    try {

        const newUser = await client.user.create({
            data: {
                username: username,
                password: hashedPassword
            },
        })

        // 7) Send success response
        res.status(201).json({
            message: "User created successfully!",
            userId: newUser.id,
            username: newUser.username,
        })

    } catch (error: any) {
        console.log("database error");

        res.status(500).json({
            message: "Something went wrong"
        })
    }

})

const signinSchema = z.object({
    username : z
        .string()
        .min(3),
    
    password : z    
        .string()
        .min(6)
})

app.post("/signin", async (req, res) => {

    const { data, success, error } = signinSchema.safeParse(req.body)


    if (!success) {
        res.status(400).json({
            message: "Input invalid",
            error: error
        })
        return;
    }

    const { username, password } = data

    const userExist = await client.user.findFirst({
        where : {
            username
        }
    })

    if(!userExist) {
        res.status(402).json({
            message : "User does not exist"
        })
    }


    const passCheck = await bcrypt.compare(password, userExist!.password)

    if(userExist && passCheck) {
        
        const token = jwt.sign({
            username : username
        },"arun123");

        
        res.json({
            user : username,
            message : "User signed in",
            token : token
        })
    }


})

app.listen(3006);