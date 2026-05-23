
interface User {
    firstName : string,
    lastName : string,
    age : number,
    email : string
}

let u1 : User = {
    firstName : "Arun",
    lastName : "Mahajan",
    email : "arunmahajan123@gmail.com",
    age : 22
}

function isLegal(user : User) : boolean {
    if(user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isLegal(u1));
