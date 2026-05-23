

let fs = require("fs/promises");

// let a2 = fs.readFileSync("a.txt", "utf-8");
// let trim_content = a2.trim();
// fs.writeFileSync("a.txt", trim_content)
// console.log(a.trim());

// let a3 = fs.readFile("a.txt", "utf-8", (err, data) => {
//     const trimmedata = data.trim();
//     fs.writeFile("a.txt", trimmedata, ()=> {
//         console.log("done");
        
//     });
// });

// console.log(a3);


function readFilePromisified(filename, encoding) {
    return new Promise((res, rej) => {
        fs.readFile(filename, encoding, (err, data)=> {
            if(err) {
                console.log("error while reading file");
                rej(err);
            }
            else {
                console.log(data);
                res(data)
            }
        })
    })
}


// let a = readFilePromisified("a.txt", "utf-8")
//     .then((data) => {
//         console.log("file read success");
        
//     })
//     .catch((data) => {
//         console.log("file read error");
        
//     })
// console.log(a);



// 4th way new try catch with async await , we can only use await in async function

// async function main() {
//     // if ever read file gives error, then how to handle use try catch
//     try{
//         // await // cleanfile
//     } catch(e) {
//         log
//     }
// }

// async and await is just a promise, if that async returns correct it goes to the then 
// else if got error it goes to the catch


async function clean(filename, encoding) {
    try{
        const a5 = await fs.readFile(filename, encoding);
        const trimmedContent = a5.trim();

        const b = await fs.writeFile(filename, trimmedContent);

        console.log("file cleaned");
        return trimmedContent;
            
    } catch(e) {
        console.log(e);
        
    }
}


setTimeout(() => {

}, 5000)

async function main3() {
    let c = await clean("a.txt", "utf-8")
    console.log(c);
}

main3()