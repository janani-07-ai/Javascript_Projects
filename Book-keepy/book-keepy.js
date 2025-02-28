var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var cancel = document.getElementById("cancel")

cancel.addEventListener("click", function (event) {
    event.preventDefault()
    popup.style.display = "none";
    overlay.style.display = "none";
})

var addNew = document.querySelector(".addNew")

addNew.addEventListener("click", function () {
    popup.style.display = "block";
    overlay.style.display = "block";
})

var container = document.querySelector(".container")
var bookcontainer = document.querySelector(".bookcontainer")
var addBook = document.getElementById("addBook")
var bookTitle = document.getElementById("booktitle")
var bookAuthor = document.getElementById("bookauthor")
var bookDescription = document.getElementById("bookdescription")

addBook.addEventListener("click", function (event) {
    event.preventDefault()
    var newOne = document.createElement("div")
    newOne.setAttribute("class", "bookcontainer")
    newOne.innerHTML =
        `<h2>${bookTitle.value}</h2>
  <h5>${bookAuthor.value}</h5>
  <p>${bookDescription.value}</p>
  <button onclick="finish(event)">Delete</button>
  `
    container.appendChild(newOne)
    popup.style.display = "none";
    overlay.style.display = "none";
})
function finish(event) {
    event.target.parentElement.remove()
}