
type Key = "up" | "down" // this is too ok , but enum is more readablel

enum Directions {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

// js converts this up to the 0,1,2,3



function doSomething(keyPressed : Directions) {
    
    if(keyPressed == Directions.UP) {
        console.log("go up bc");
        
    }
    
}

// doSomething(Directions.DOWN)

type Input = string | number

// function firstEl(arr : (number | string)[]) {
//     return arr[0]
// }

function firstEl(arr : Input[]) {
    return arr[0]
}

const value = firstEl(["Arun", "Yash"])

console.log(value);


