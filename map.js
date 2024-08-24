//   create a new map 
//   set these properties("a", "b", "c")
//   set these values("1", "2", "3")
//   get a from that map
//   check the size of that map
//   delete the properties "b" and check the size  

const map1 = new Map()  // create new map

map1.set("a", 1)  // set these properties   value => 1, 2 or 3
map1.set("b", 2)
map1.set("c", 3)


console.log(map1.get("a")) // get  from that map
console.log(map1.delete("b"))  // delete properties b
console.log(map1.get("c"))

console.log(map1.size)  //check size 