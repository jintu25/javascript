// JavaScript Symbol.The JavaScript ES6 introduced a new primitive data type called Symbol.
// Symbols are immutable(cannot be changed) and are unique.

const sym = Symbol.keyFor(Symbol.for("tokenStrin")) === "tokenString";
console.log(sym)

