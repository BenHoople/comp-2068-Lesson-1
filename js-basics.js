console.clear();
//look a comment
/* look a multiline code */
{
//mutable variables (can change)
var dontUseTheeAnymore = true;
let useThisInstead = true;//these are block scoped  {}
//non-mutable variables (constants)
const useTheseAsMcuhAsPosible = true;

//error handling
try{
    useTheseAsMcuhAsPosible = false;
}catch (e) {console.log(e.toString())}

//variable scoping
let outsideBlock = "look at me";
{
    console.log(outsideBlock);
    let insideBlock = "cant see me";
}try {
    console.log(insideBlock);
} catch (error) {
    console.error(error.toString());
}

//arrays can be constant but the values are mutable
const array = [3,5,15];
console.log(array);
//objects
const obj = {
    name: 'Ben Hoople',
    age: 26,
    favoriteColour: 'red'
};
console.log(obj.name);
for (let value in obj){
    console.log(obj[value]);
}
//evaluate expressions by seeing if the expression is true or false!!!
switch (true){
    case 5<7:
    console.log("YEAH!");
    break
}
//functions
function sayHelloWorld(name){
    console.log(`${name} says Hello World!`);
}

sayHelloWorld("Ben");
let myHelloWorldFunction = sayHelloWorld;
console.log(myHelloWorldFunction);
myHelloWorldFunction("Shit Head");
}
