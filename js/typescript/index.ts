function greet(username : String) {
    console.log("Hello " + username);
    
}

function sum(a : number, b : number) {
    console.log(a + b);
    
}

function first_element(arr : number[]) : number | null {
    if(arr && arr.length > 0) {
        return arr[0] ?? null
    }

    return null;
}


console.log(first_element([3, 4, 5]));
console.log(first_element([]));

const x = first_element([])




// greet("Arun")
sum(2,1)