console.clear();

//destrucutring
/*
takes values in an array and 
auto assigns them to 
variable names that i create
*/
// destructure an array
const arr = ['mario', 'snake', 'spyro'];
const [nintendo, konami, playStation] = arr;
console.log(nintendo, konami, playStation);
//deconstruct object
const Ben = {
    name: 'Ben Hoople',
    age: 26,
    dob: (new Date(1994,3,17).toString())
};
console.log(Ben);
const {name, age, dob} = Ben;
console.log(`Your name is ${name}
and you are ${age} years old
and you were born on ${dob}`);
//predefined values
const tim = {
    alias: 'Super Tim'
};
const {alias, aka = 'a value', race = 'probably has one'} = tim;
console.log(alias, aka, race);

//spread operator allows expansion of ARRAYS
const numbers = [3,5,15];
const numberChanges = [0,1,...numbers, 75];
console.log(numberChanges);

//example
const person = {name:"bob",spouse: "Karen", children:4};
const hobbies = {fav: "walking the dog", secFav: "food"};
const completePerson = {...person, hobbies: {...hobbies}};
console.log(completePerson);
//spreading ARGUMENTS
function sayHello (name, age ,dob){
    console.log(`    Hello, ${name}.
    You're ${age} years old
    You were born on ${dob}`);
}
//destructure arrays to pass their variables
const anotherPerson = ['Ben', 26,'17-04-94'];
sayHello(...anotherPerson);
//destructuring an object
function goodBye({name, age, dob}){
    console.log(`Goodbye ${name}... twas nice to know you`);
}
goodBye(Ben);
//arrow functions         //Params Arrow Body
const myFirstArrowFunction = () => {
    console.log("im an arrow function");
    console.log("sing 'THIS' here maintains the object reference to the outside object, not this block");
}
