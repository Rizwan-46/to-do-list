// const container = document.querySelector("#list-container");
// const toDoApp = document.querySelector(".todo-app");
// const inputBox = document.getElementById("input-box");
// const btn = document.querySelector("button");
// localStorage.clear();
    function createlist() {
        const li = document.createElement("li");
     
        const span = document.createElement("span");
        // span.setAttribute("onclick", "deleteList()");
        var field = inputBox.value;
        if (inputBox.value === "") {
            return false;
        }
        span.textContent = "x"
        li.textContent = field; // set the text content first
        li.append(span); // then append the span element
        container.appendChild(li);
        inputBox.value = "";
        localStorage.setItem('todoList', container.innerHTML);
    };
    
//     container.addEventListener("click", function (e){
//         if (e.target.tagName === "SPAN") {
//          e.target.parentElement.remove();
//         }
//         else if (e.target.tagName === "LI") {
//          e.target.classList.toggle("checked") // use e.target here
//         }
//      });
    
 


    
// btn.addEventListener("click", createlist);


const container = document.querySelector("#list-container");
const inputBox = document.getElementById("input-box");
const btn = document.querySelector("button");

// function createlist() {
//     const li = document.createElement("li");
//     const span = document.createElement("span");
//     var field = inputBox.value;
//     if (inputBox.value === "") {
//         return false;
//     }
//     span.textContent = "x"
//     li.append(span); // append the span element first
//     li.textContent = field; // then set the text content
//     container.appendChild(li);
//     inputBox.value = "";

//     // Store the updated list in localStorage
//     localStorage.setItem('todoList', container.innerHTML);
// };

container.addEventListener("click", function (e){
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        // Update the stored list after removing an item
        localStorage.setItem('todoList', container.innerHTML);
    }
    else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        // Update the stored list after checking/unchecking an item
        localStorage.setItem('todoList', container.innerHTML);
    }
});

btn.addEventListener("click", createlist);

// Load the list from localStorage on page load
document.addEventListener('DOMContentLoaded', (event) => {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        container.innerHTML = savedList;
    }
});
