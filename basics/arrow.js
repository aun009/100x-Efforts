
const sum = (a, b) => {
    return a+b;
}

const arr = [1,2,3,4,5];

const newArray = [];

for(let i=0; i<arr.length; i++) {
    newArray.push(arr[i] * 2);
}

// console.log(newArray);

// other soln

const ans = arr.map((el)=> {
    return el * 3;
})

console.log(ans);


const even = arr.filter((el) => {
    return (el %2 == 0);
})

console.log(even);
