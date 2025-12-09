let name="Alice";
let age=23;
let isStudent =true;
let x;
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof x);

const greet=(a,b) => { 
    return a+b;
}

let r=greet(5,7);


console.log("the sum is: "+r);
let students=["John","Jane","Doe"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students.length);

let b= [1,2,3];
b.pop();
console.log("b variable after pop:");
console.log(b);
b.push(4);
console.log("b variable after push:");
console.log(b);

let c=[2,3];
c.unshift(1);
console.log("c variable after unshift:");
console.log(c);

let t=[1,2,3,4];
t.shift();
console.log("t variable after shift:");
console.log(t);

let y=["a","b","c"];
console.log(y.includes("d"));
console.log("\n");
console.log("\n");
console.log("\n");


let person={ name:"Alan", age:19 , place:"USA"};

console.log(Object.keys(person));
console.log(Object.values(person));

person.city="delhi";
console.log(person);

person.age=20;
console.log(person);
delete person.age;
console.log(person);