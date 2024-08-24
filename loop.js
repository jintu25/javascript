const object = [2, 3, 4, 5, 6]
for (const key in object) {
    // console.log(key)  
    // console.log(object[key])
}
for (const iterator of object) {
    console.log(iterator)
    console.log(object[iterator])
}