function authMiddleware(req, res, next) {
    const token = req.headers.token
    
    if(!token) {
        res.status(403).send({
            message : "You are not logged in"
        })

        return;
    }

    // if user sended us the token then verify them

    const decoded = jwt.verify(token, "arun123")

    const username = decoded.username; // here we got the username

    if(!username) {
        res.status(403).send({
            message : "Malformed token"
        })
        return;
    }

    const note = req.body.note;

    notes.push({note, username})

    req.username = username

    next()

}


module.exports = {
    authMiddleware
}