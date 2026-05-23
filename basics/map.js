const m = new Map();
m.set(1, "A");
m.set(2, 'B');

console.log(m.has(2));

const fs = require("fs");

function callback(err, content) {
    console.log("inside callback, " + content);
    
}



const data = fs.readFile("a.txt", "utf-8", callback)




console.log("Arun here");


