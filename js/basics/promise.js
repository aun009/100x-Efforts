

// // is an obj that represents eventual completion of an async opperation 



// // calling promise is easy , definig your own promise is hard


// // function callbackify(err, content) {
// //     console.log("content");
    
// // }

// // setTimeout(callbackify, 3000);

// // console.log("arun");


// const fs = require("fs");

// function callback(err, data) {
//     if(err) {
//         console.log("error while reading");

//     }
//     else {
//         console.log(data);
        
//     }
// }

// const content = fs.readFileSync("a.txt", "utf-8", callback);

// console.log(content);


// // how to do same by the promise style

// function fsReadFilePromisified(filepath, encoding) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filepath, encoding, (err, data) => {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }


// fsReadFilePromisified("a.txt", "uft-8")
//     .then(callback)
//     .catch(callbackerr)


// // why are promises better than callback 
// // syntax is much more readable 

























const { resolve } = require("dns");
let fs = require("fs");


function readFilePromisified(filename, encoding) {
    return new Promise((resolve, reject)=> {
        fs.readFile("a.txt", "utf-8", (err, data)=> {
            if(err) {
                console.log("error while reading the file");
                reject(err);
            }
            else {
                // console.log(data);
                
                resolve(data);
            }
        })
    })
}


function main() {
    let k = readFilePromisified("a.txt", "utf-8")
        .then((filedata)=> {
            console.log(filedata);
            // readFilePromisified("b.txt", "utf-8") {
            //     .then()
            // }
            
        })

        // there will come no error , when a file read then call b file read after that, syntex gets messy 
}

main();

// better way is like below

async function main2() {
    let f1Content = await readFilePromisified("a.txt", "utf-8");
    let f2Content = await readFilePromisified("a.txt", "utf-8");
    let f3Content = await readFilePromisified("a.txt", "utf-8");


    console.log(f1Content);
    // only this instead of .then and .catch  and .finally
}

