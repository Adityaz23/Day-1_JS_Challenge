"use strict"

// Activity 1:
// Variable decalartion :- 
// Using var :-
var a = 12;
console.log(a);

// Activity 2:
// Using let :-
let c = "Aditya Kumar Soni";
console.log(c);

// Activity 3:
// Constant decalration :-
const male = true;
console.log(male);

// Activity 4: 
// Data Types :-
let num1 = 21;
let str1 = "DAY-1 ASSIGNMENT";
let boolean = true;
let object1 = {
  name: "Aditya Kumar Soni",
  age: 21,
}
const arr1 = [1, 2, 3, 4, 5];
console.log(num1, str1, boolean, object1, arr1);
console.log(typeof num1, typeof str1, typeof boolean, typeof object1, typeof arr1);

// ACTIVITY - 4 :-
// Reassigning the value :-
let var1 = 20;
var1 = 22;
console.log(var1);

// Activity - 5 :-
// Understanding const :-
const var2 = 23;
// var2 = 29;  // error , cause the const is used to specify a particular value to the assigned parameter.
console.log(var2);

// Activity - 6 :-
// Feature Request :-

const var3 = 45;
const arr2 = ["Aditya", "Kumar", "Soni"];
const bool2 = false;
const obj2 = {
  car: "alto 800",
  model: 1999,
}
const str2 = "This is the most needed challenge";

console.log(var3, typeof var3, arr2, typeof arr2, bool2, typeof bool2, obj2, typeof obj2, str2, typeof str2);

// Activity - 7 :-
// Reassignment :- 

// using let :- 

let testCase = 10;
console.log("Before the changes: ", testCase);

testCase = 20;
console.log("After the changes: ", testCase);

// Using const :- 

const testCase2 = 23;
console.log("Before the changes: ", testCase2);

// testCase2 = 39;
// console.log("After the changes: ", testCase2); // error cannot change the value if we using const.