function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
// console.log(sum(...numbers));
// Expected output: 6

// console.log(sum.apply(null, numbers));
// Expected output: 6

// --------- note -------------
// Spread syntax can be used when all elements from an object or array need to be included 
// in a new array or object, or should be applied one - by - one in a function call's arguments list.

// spread operator doing the concat job
let arr = [1, 2, 3];
let arr2 = [4, 5];

const totalResult = arr.concat(arr2)
// console.log("concat result", totalResult)
arr = [...arr, ...arr2];
// console.log(arr); // [ 1, 2, 3, 4, 5 ]


// students add use spread operator 
const students = [ "joy", "ashis", "ruhul", "shanta" ]
const addStudents = [ "rofiq", ...students, "borkot"]
// console.log("Now all students are ", addStudents)


// spread operator use in Object
const info = {
  name: "jintu paul",
  profession: "web developer",
  students: "diploma engineer"
}

const infoResult = {...info, age: 22}
console.log(infoResult)