const everything = document.querySelector(".everything")
const title = document.querySelector("#title")
const para2 = document.querySelector("#para2")
const paragraph = document.querySelector("#paragraph")
// change the title content using innerHTML
// change for use <> </> use html tag
title.innerHTML = "<h1> Hello, this is first title </h1>"
console.log(paragraph.innerText) //it's show formating content

console.log(paragraph.textContent)
// paragraph.textContent = "this full paragraph what i use...." 
//show same result like innerText but it's not show formating

para2.innerText = "this is second title"

// ------> classlist <-------
// add class or id name use variableName.classList.add
const h4 = document.querySelector("h4")
h4.classList.add("styles")
console.log(h4)

// remove or delete class or id name use variableName.classList.remove
const classRemove = document.querySelector("h5")
// classRemove.classList.remove("classRemove")

//"toggles" token, removing it if it's present and adding it if it's not present
classRemove.classList.toggle("sub")

// sibling
const ul = document.querySelector("ul")
const li = document.querySelector("li")
const fourth = document.querySelector("#fourth")
console.log(li.parentElement)
console.log(ul.children)
console.log(ul.children[0])
console.log(ul.children[0].innerText)
// use for show sibling output
console.log(ul.children[0].nextElementSibling.innerText)
console.log(ul.children[0].nextElementSibling.nextElementSibling.innerText)
// use for previous sibling output
console.log(fourth.previousElementSibling.innerText)

// add styling use javascript
const addStyle = document.querySelector("#addStyle")
console.log(addStyle.style)
addStyle.style.color = "white"  //text color change
addStyle.style.background = "blue"
addStyle.style.padding = "20px"
addStyle.style.borderRadius = "15px"

// create a new element
const newElement = document.querySelector(".newElement")
const h1 = document.createElement("h1") //create new element
h1.textContent = "hello world"  // write a content for new element
newElement.appendChild(h1) // append child tag under newElement 
console.log(h1.textContent) // run and check 


// add event listener
// const click = document.querySelector("#click")
// function greetings(){
//     console.log("tumi ke ami ke rajakar rajakar")
// }
// click.addEventListener("click", () => greetings())

const name = document.querySelector("#name")
const form = document.querySelector("form")

form.addEventListener("submit", event => {
    event.preventDefault()  //remove default behaveour use this
    console.log(name.value)
    console.log(event) 
    console.log(event.timeStamp)
})