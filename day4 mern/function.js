function greet(){
    console.log("Hello, World!");
} 
greet();    

let greet2=function(){
    console.log("Hi there!");
} 
greet2();

let greet3= () => { 
    console.log("Greetings!");
} 
greet3();

const add1=(a,b) => { 
    return a+b;
}  
let result=add1(3,4);
console.log(result); 

console.log(add1(3,4)); 
const add= (a,b) => a+b;
console.log(add(5,7));   
