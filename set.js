// A JavaScript Set is a collection of unique values.
// Each value can only ... The new Set() Method.

const value = new Set()
value.add("apple")
value.add("banana")
value.add("orange")
value.add("apple") //apple doesn't add because it's not unique value
// console.log(value)

// console.log(value.delete("banana"))
// value.clear() //clear all value
// console.log("now value is: ", value)
 //after clear value now value is emty

// console.log(value.has("orange"))  // search orange is available or not


for (const val of value) {
    // console.log(val)
}


const letters = new Set()
const a = letters.add("A")
const b = letters.add("B")
const c = letters.add("C")

console.log(letters)
for (const letter of letters) {
    console.log(letter)
}