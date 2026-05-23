

interface Person {
    name : string;
    age : number,
    city : string,

    greet(pharase : string) : void
}

// both does the same work

type Person1 = {
    name : string;
    age : number,
    city : string,

    greet(pharase : string) : void
}

let p1 : Person = {
    name : "Arun",
    age : 22,
    city : "Erandol",

    greet() : void {
        console.log("runnnn");
    }
}


// interface can be implemented by classes not by types
// we can do other things in type there

type PinCode = string | number // this is union


type Employee = {
    name : string,
    department : string
}

type Manager = {
    name : string;
    salary : number
}

type SuperManager = Employee & Manager // this is called the Intersection

// this above is same as the below, include all the fields

type SuperManeger = {
    name : string,
    department : string,
    salary : number
}

