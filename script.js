var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
//whenever we render to-dos, we want to empty it and render the list
function renderTodos() {
    todoList.innerHTML= "";
    todoCountSpan.textContent = todos.length;
//inside the reader function is the for loop
    for var i=0; i<todos.length; i++ {
    //create an element called li
       var li = document.createElement("li");
       //setting it up to the current element we are on
        li.innerText = "todos[i]"; 
        todoList.appendChild(li);
    }
};

renderTodos()