
// GEnerics

function identity<T>(arg : T) { // the function identity can be of any type, give me the type there , i will pass that inside
    return arg;
}

// we can create multiple variations of your functions

let out1 = identity(2)
let out2 = identity("Arun")

console.log(out2.toUpperCase());



function getFirstElement<T>(arr : T[]) : T | undefined {
    return arr[0]
}

const el = getFirstElement(["Arun", "Yash"])

console.log(el);
