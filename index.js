// VARIABLES    
// VAR 
// define 
var number = 100
console.log(number)
// update 
number = 200
console.log(number)
// redefine
var number = 'orange' 
console.log(number)

// ************************** 

// Let 

// define 
let fruit = 'apple'
console.log(fruit)
// update 
fruit = 'pear'
console.log(fruit)
// redefine 
// let fruit = 'banana'
// console.log(fruit)
// ****************************
// CONST 
// define 
const boilingPoint = 100
console.log(boilingPoint)
// update 
// boilingPoint = 150

const person = {name:'Peter'}
console.log(person)
person.name = 'Simon'
console.log(person)

// ******************************

// Local scope 

function greeting() {
var value = 'hello'
console.log(value)
}
greeting()
// console.log(value) 

function greeting1 (){
    let greet = 'hello'
    console.log(greet);
    
}
greeting1()

// ******************* 

// Block scope 

var test = true
var total = 1000
if (test) {
    var total = 'apples and pears'
}
console.log('Salary is ' + total);

var test1 = true
var amount = 2000
if (test1) {
    let amount = 'apples and pears'
}
console.log('Salary is ' + amount);
