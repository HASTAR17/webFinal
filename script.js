//Document Object Model 



//Document Object Model

let p = document.createElement('button');
p.innerText = 'click me';

// Select an element by its ID
var element = document.getElementById("myElementId");

// Select elements by their class name
var elements = document.getElementsByClassName("myClassName");

// Select elements by their tag name
var tags = document.getElementsByTagName("div");

// Create a new element
var newElement = document.createElement("p");

// Add text to the new element
newElement.textContent = "Hello, World!";

// Append the new element to an existing element
element.appendChild(newElement);

// Add an event listener to an element
element.addEventListener("click", function() {
    alert("Element clicked!");
});

document.querySelector("#alert").addEventListener("click", function() {
    alert("Button clicked!");
});
