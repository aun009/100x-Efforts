
const express = require("express")

const app = express()
const bcrypt = require("bcrypt")
const { Pool } = require("pg")
app.use(express.json())

const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_E6lyOPQneBb3@ep-falling-pine-apibwcll.c-7.us-east-1.aws.neon.tech/neondb?sslmode=require"
})



app.post("/signup", async (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const hashedPassword = await bcrypt.hash(password, 10)


    await pool.query(
        "INSERT INTO users (username, email, password) VALUES($1, $2, $3)", 
        [username, email, hashedPassword]
    );

    res.json({
        message : "Sign up done"
    })
})

app.post("/signin", async (req, res) => {
    // const username = req.body.username
    const password = req.body.password
    const email = req.body.email

    // now here in sign in we cant check pass now, cause pass in db is encrypted

    const response = await pool.query(`SELECT * FROM  users WHERE email =$1`, [email])

    const userExists = response.rows[0];
    if (!userExists) {
        res.status(403).json({
            message: "Incorrect creds"
        });
    } else {

        const correctUser = bcrypt.compare(password, userExists.password)
        // 3. If a user is found, send back the token
        if(correctUser) {
            res.json({
                token: "asdioaisdosadiosdaisado"
            });
        }
        else {
            res.status(403).json({
                message : "Wrong password"
            })
        }
        
    }

})

app.listen(3007)