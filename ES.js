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




//` operator printing
console.log("object")
let name="cvr";
let age=20;
let obj = {
    name,
    age,
    display:function(){
        return `Name: $(this.name)
        and
        Age: $(this.age)`
    }
}

console.log(obj.display());

//setTimeout function
let obj1 = {
    name,
    age,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log("Inside timeout function",this)
        },2000);    
    }
}
console.log(obj1.display());
//the above way is asynchronous so the second this refers to window object 
//the solution is to use bind method shown as follows
let obj2 = {
    name,
    age,
    display(){
        console.log(this)
        setTimeout(function(){
            console.log("Inside timeout function",this)
        }.bind(this),2000);    
    }
}
console.log(obj2.display());
//or we can use a arrow function instead of using the bind as follows

let obj3 = {
    name,
    age,
    display(){
        console.log(this)
        setTimeout(()=>{
            console.log("Inside timeout function",this)
        },2000);    
    }
}
console.log(obj3.display());