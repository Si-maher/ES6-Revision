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