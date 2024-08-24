// sum all array values
// reduce function use and sum array all value

// acc is previous value and val is current value
let value = [2, 3, 4, 5].reduce((previous, current) => {
    console.log(`previous value: `, previous)
    console.log(`current value: `, current)
    return previous + current
}, 0
)
console.log(value)

// use eval and sum all array values
const sumVal = eval([1, 2, 3].join("+"))
console.log(sumVal)

// foreach // use foreach and sum all off array value
let numbers = [2, 3, 4, 5, 6]
let sum = 0
function sumValue(number) {
    return sum += number
}
numbers.forEach(sumValue)
console.log(sum)

// array value map use and multiple array
let array2 = [2, 3, 4]
const res = array2.map((arr, i) => { // map() creates a new array from calling a function for every array element. 
    return (arr * 2)
})
console.log(res)

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);
console.log(result);

const computers = [
    {
        ram : 8,
        rom : 264,
        company: "HP",
        price : 55000
    },
    {
        ram : 4,
        rom : 228,
        company: "HP",
        price : 52000
    },
    {
        ram: 4,
        rom: 154,
        company: "Dell",
        price: 50000
    }

]
console.log(computers.filter(com => com.price >= 52000))
//filtering array which price equal or greater than 52000 