
// we can implement interface , with the class

interface Person {
    name : string;
    age : number,
    city : string,

    greet(pharase : string) : void
}

class Teacher implements Person {
    name : string;
    age : number;
    city: string;

    constructor(name : string, age : number, city : string) {
        this.name = name;
        this.age = age
        this.city = city
    }

    greet(pharase: string): void {
        console.log("hi there " + pharase);
        
    }
}


abstract class Employee {
    abstract work(): void;

    clockIn() : void {
        console.log("punch clock");
        
    }
}

class Developer extends Employee {
    override work(): void {
        console.log("work smart");
        
    }
}

// all methods and fields should be implemented in the javascript 