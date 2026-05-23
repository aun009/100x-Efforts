
const express = require("express");
const path = require("path")

const app = express()

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile("/home/arun/Desktop/cohort/js/calculatorhttpserver/index.html");
}) 


app.post("/sum", (req, res) => {
    let a = parseInt(req.body.a)
    let b = parseInt(req.body.b)

    let sum = a + b;

    res.json({
        ans : sum
    })
})

app.get("/div/:a/:b", (req, res) => {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)

    let div = a / b;

    res.json({
        ans : div
    })
})

app.get("/sub/:a/:b", (req, res) => {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)

    let sub = a - b;

    res.json({
        ans : sub
    })
})


app.get("/multy/:a/:b", (req, res) => {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)

    let multy = a * b;

    res.json({
        ans : multy
    })
})



app.listen(3002)