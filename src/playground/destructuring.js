const person = {
    name: 'Andrew',
    age:28,
    location:{
        city:'delhi',
        temp:92
    }
};

//const name= person.name;
//const age=person.age;
//console.log(``);
const {name,age}=person;

console.log(`${name} is ${age}`);