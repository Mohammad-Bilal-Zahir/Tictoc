let a = 4;
let b = 7;
console.log("the value of a =", a);
console.log("the value  of b =", b);
console.log("the sum of a + b = ", a+b);
console.log("the value of a =", a);
console.log("the value  of b =", b);
console.log("the substruction of a - b = ", a-b);
console.log("the value of a =", a);
console.log("the value  of b =", b);
console.log("the multiplication of a * b = ", a*b);
console.log("the value of a =", a);
console.log("the value  of b =", b);
console.log("the division of a / b = ", a/b);
let x = 8;
console.log("the value of x is =",x);

console.log("the value of x in post increment in the first time",x++);  //here it will not change the value, here it says first of all i will print the value and then I will change the value.

console.log("the value of x is in post increment in the second time",x); // here the value is being changed.

console.log("the value of x", x);
console.log("the value of x in post decrement for the first time", x--);
console.log("the vlaue of x in post decrement for the second time",x);

console.log("the value of x", x);
console.log("the value of x in pre decrement for the first time", --x);
console.log("the vlaue of x in pre decrement for the second time",x);

let p = 8;
let r = 3;
console.log(" p == r", p==r);  // here it prints false
p = 8;
r = 8;
console.log(" p == r", p==r);  // here it prints true
p = 8;
r = "8";
console.log(" p == r", p==r);  // here it prints true because js first convert the string to number and then compare
// to solve this problem we use more strict comparison
p = 8;
r = "8";
console.log(" p == r", p===r);  // here it prints false
 
// here we work on ternary operator

let Age = 25;
let result = Age >= 18? "adult" : "adult";
console.log(result);
//alert("hi , how are you"); // it give a message when you open a website.
//prompt("hi guys"); // it also give a message but it can get a value from the user as well
 let number = prompt("please enter a number");
 if(number %5 ==0){
    console.log("this",number," number is a multiple of 5");
 }
 else
 {
    console.log("the number is not a multiple of 5")
 }







