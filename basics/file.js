
function add(a, b) {
    return a+b;
}

function sub(a,b) {
    return a-b;
}

function arithmetic(a,b, fn) { // now here in place of that fn all the func code will be copied
    return fn(a,b); 
}


const ans1 = arithmetic(1,2,add);
const ans2 = arithmetic(2,3, sub);
console.log(ans1);
console.log(ans2);


