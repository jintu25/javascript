// -------- declaration function ---------
// function helloWorld(value) {
//     console.log('Hello World!');
// }
// helloWorld()

// ---------- function expressions || anonymous function --------
const greetings = function(name) {
    console.log(name)
}
// greetings("jintu paul")

// -------- callback function -----------
// A callback function is a function passed into another function as an argument,
//  which is then invoked inside the outer function to complete some kind of routine or action.

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
// greet('Peter', callMe);
// The benefit of using a callback function is that you can wait for the result
//  of a previous function call and then execute another function call.

//  program that shows the delay in execution
function greet() {
    console.log('Hello world');
}
function sayName(name) {
    console.log('Hello' + ' ' + name);
}
// calling the function
// setTimeout(greet, 2000);
// sayName('John');


// Callback Function Example
function greet(name, myFunction) {
    console.log('Hello world');
    // callback function
    // executed only after the greet() is executed
    myFunction(name);
}

// callback function
function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function after 2 seconds
setTimeout(greet, 2000, 'John', sayName);


// ------- Note: The callback function is helpful when you have to wait for a result
// ------- that takes time. For example, the data coming from a server because it takes time for data to arrive.

// arrow function
const values = (value1, value2) => {
    return value1 + value2
}
// console.log(values(30, 20))

// --------- default function ---------- //
const defFunc = (value1, value2 = 2) => {
    return value1 * value2
}
console.log(defFunc(4))

// ---- note ---///
// Default function parameters allow named parameters to be initialized
//  with default values if no value or undefined is passed.