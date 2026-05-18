
const jwt = require("jsonwebtoken")

function authMiddleware(req, res, next) {

    const token = req.headers.token

    if(!token) {
        res.status(403).json({
            message : "You are not logged in"
        })

        return;
    }

    // we got token then decode it and get username
    const decode = jwt.verify(token, "arun123");
    const userId = decode.userId

    if(userId) {
        req.userId;
        next()
    } else {
        res.status(403).json({
            message : "Token was incorrect"
        })
    }

    req.username = username;

    next();


}

module.exports = {
    authMiddleware
}