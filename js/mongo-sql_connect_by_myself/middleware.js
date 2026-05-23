
const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next) {

    const token = req.headers.token

    if(!token) {
        res.status(403).json({
            message : "You are not allowed"
        })
        return;
    }

    // now we have valid token
    const decoded = jwt.verify(token, "arun123");

    const username = decoded.username

    if(!username) {
        res.status(403).json({
            message : "Token altered"
        })
        return;
    }

    next()


}