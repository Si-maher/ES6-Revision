// function declaration 

function sayHi() {
    console.log('hello');
    
}
sayHi()

// function expression 

const Hello =function(name){
console.log(`hello ${name}`);
    
}
Hello('Bob')

// zero parameters
 let hello1 = () => console.log('hi bob');
 hello1()

//  one parameter 
let double = (num) => num*2
let num = double(4)
console.log(num);


// two parameter 

let multiply = (num1,num2) => {
const result = num1 *num2
return result;
}
console.log(multiply(10,2));

// object 

const obj = ()=> ({name:'dave', age: 33})
const person = obj()
console.log(person);

// Array 
const numbers = [1,2,3,4,5,6,7,8,9]
const high = numbers.filter(number => number > 3)
console.log(high);


// this 

const clock = {
    time:0,
    stopwatch: function(){
        const self = this
        setInterval(function() {
            console.log(self.time++)
        },1000)
    }
}

// clock.stopwatch()

// this using arrow function 

const  clock1 = {
    time:0,
    stopwatch1: function() {
        setInterval(() => {
            console.log(this.time++);
            
        },1000)

    }
}
// clock1.stopwatch1()