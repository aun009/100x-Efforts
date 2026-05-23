
function isLegal(user) {
    if(user.age >= 18 && user.sex == 'male') {
        console.log(user);
        return;
    }
}

let user = [{
    name : "Arun",
    age : 22,
    sex : "male"
}, {
    name : "Pavan",
    age : 15,
    sex : "male",
},{
    name : "harsha",
    age : 22,
    sex : "female"
}]

for(let i=0; i<user.length; i++) {
    isLegal(user[i]);
}

