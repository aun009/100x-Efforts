
const express = require("express")

const app = express()


let count = 0;

// app.use((req, res, next)=> {
//     count++;
//     next();
// })
// this above is global 

const middleware = (req, res, next) => {
    count++;
    next();
};


app.get("/greet", middleware ,(req, res) => {
    res.json({
        msg : "Hi"
    })
})

app.get("/count", (req, res) => {
    res.json({
        msg : count
    })
})

app.listen(3004)