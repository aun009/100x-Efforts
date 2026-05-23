
const jwt = require("jsonwebtoken")

function authMiddleWare(req, res, next) {
    const token = req.headers.token;

    const decoded = jwt.verify(token, "arun123")


    if(decoded.userId) {
        req.userId = parseInt(decoded.userId) // passing here userId in request
        next()
    } else {
        res.status(403).json({
            message : "Token Invalid or not found"
        })
    }
}

module.exports = {
    authMiddleWare : authMiddleWare
}