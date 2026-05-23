
const axios = require("axios")

function main() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(async response => {
            const json = await response.json();
            console.log(json);
            
        })
}

// other way to write fetch 

async function main2() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const json = await response.json();

    console.log(json);
    
}


// now axious

async function main3() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
    console.log(response.data); // it automatically triggers which type of data it is , json or something
    
}

async function main4() {
    const response = await axios.post("https://httpdump.app/dumps/6bd9448d-3902-42d4-ba2c-53b5dc73fbdf", {
        // here can have body
        username : "Arun",
        password : "akm"
    },  {
        // here can have headers
        headers: {
            "Authorization" : "Bearer 123"
        }
    })

    const jsonData = response.data;
    console.log(jsonData);
    

}



























async function main5() {
    
    const req = await axios.post("https://httpdump.app/dumps/6bd9448d-3902-42d4-ba2c-53b5dc73fbdf", {
        name : "Avi Pawade",
        Company : "TCS",
        package : "12 LPA"
    }, {
        headers : {
            Authorization : "Bearer 123 Secret Password"
        }
    });
    const data = await req.data;
    console.log(data);
    
}


main5();