console.log("Arguments")
function sum(a){
    console.log(arguments)
    let res=0;
    for(let i in arguments)
       res+=arguments[i];
    return res;
}
console.log(sum(1,2,3,4,5,6,7))

console.log("REST")
function sum1(str,...arguments){
    console.log(arguments)
    console.log("string is",str)
    let res=0;
    for(let i in arguments)
       res+=arguments[i];
    return res;
}
console.log(sum1("cvr",1,2,3,4,5,6,7))

console.log("spread")
let a =[1,2,3,4,5,6,7]
console.log(a)
console.log(...a)

console.log("object")
let name="rahul"
