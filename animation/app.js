const menu = document.querySelector(".menu")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    menu.classList.toggle("hide")
})

// toggle use for If force is not given, "toggles" token,
// removing it if it's present and adding it if it's not present. 