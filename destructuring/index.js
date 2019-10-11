// the old way..... 

const person = {
    name:'John',
    lastName:'Doe',
    age: 30
}
// const name = person.name
// const lastName = person.lastName

// *********************

// new way 

const {name,age} = person
console.log(name,age);
