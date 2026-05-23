

const { log } = require("console");
let fs = require("fs");

let content = fs.readFile("a.txt", "utf-8", (err, data)=> {
    if(err) {
        console.log("file have some error");
        
    }

    else {
        console.log(data);
        
    }
})

console.log(content);

// promise have 3 states
// pending
// resolved
// rejected


// promisified version of readfile

function fsReadFilePromisified(filepath, encoding) {
    return new Promise((res, rej) => {
        fs.readFile("a.txt", "utf-8", (err, data)=> {
            if(err) {
                rej();
            }
            else {
                res();
            }
        })
    })
}

fsReadFilePromisified("a3.txt", "utf-8")
    .then((data)=> {
        console.log(data);
        
    })
    .catch((e)=> {
        console.log("some sort of error while reading file");
        
    })



// promisified version of set time out


function setTimeoutPromisified(delay) { // it only takes delay, we want to make it like .then and catch

    return new Promise((res, rej) => {
        setTimeout(()=> {
            res()
            
        }, delay)
                        
    })
}

setTimeoutPromisified(3000)
    .then(console.log("done"))
    // .catch(console.log("error in the timeout"));

// setTimeout(()=> {
//     console.log("hi there");
    
// }, 1000);


