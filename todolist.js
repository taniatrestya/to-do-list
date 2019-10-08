// Add new task to the list 
function myFunction() {
    let item = document.getElementById("list-item").value;
    let text = document.createTextNode(item);
    let newItem = document.createElement("li");
    newItem.appendChild(text)
    document.getElementById("unordered-list").appendChild(newItem)
}

// Remove task on click
document.getElementById("unordered-list").addEventListener("click", function (e) {
    let tgt = e.target;
    if (tgt.tagName.toUpperCase() == "LI") {
        tgt.parentNode.removeChild(tgt);
    }
});

// Disable button when text is less than 3 characters
function toggleButton(input, addButton) {
    document.getElementById(addButton).disabled = ((input.value !== ref.defaultValue) ? false : true);
}
