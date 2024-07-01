
const nameInput = document.querySelector(".js-name-input");
const dateInput = document.querySelector(".js-date-input");
const todoListElement = document.querySelector(".js-todo-list");

// Function to add a todo item
function addTodo() {
  // Get the input values
  const todoName = nameInput.value;
  const todoDate = dateInput.value;

  // Create a new todo item object
  const todoItem = {
    name: todoName,
    date: todoDate,
  };

  // Get the existing todo list from localStorage
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  todoList.push(todoItem);

  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  nameInput.value = "";
  dateInput.value = "";

  renderTodoList();
}

function renderTodoList() {
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  todoListElement.innerHTML = "";

  // console.log(todoList)
  // Loop through the todo list and create HTML elements for each item
  todoList.forEach((todoItem, index) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <span>${todoItem.name}</span>
      <span>${todoItem.date}</span>
      <button onclick="deleteTodo(${index})">Delete</button>
    `;
    todoListElement.appendChild(todoElement);
  });
}

// Function to delete a todo item
function deleteTodo(index) {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  todoList.splice(index, 1);

  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();
}

// Render the todo list on page load
renderTodoList();


/*
let todoList = [
  {
    name: "Wash the dress",
    dueDate: "29-06-2024",
  },
  {
    name: "Watch the movie",
    dueDate: "30-06-2024",
  },
];

getTodoList();
function getTodoList() {
  let todoListHtml = "";

  // generating the html using js
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    // destructuring the object to get name and dueDate properties directly
    const { name, dueDate } = todoObject;
    // JSON.parse(localStorage.getItem('todo'))

    const html = `
        <div>${name} </div>
        <div>${dueDate} </div>
        <div>
            <button
                onclick="
                    todoList.splice(${i}, 1);
                    getTodoList();
                " class="todo-delete-btn">Delete</button>
        </div>

         `;

         console.log(todoObject)
    todoListHtml += html;
  }
  // console.log(todoListHtml);

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const dateElement = document.querySelector(".js-date-input");
  const name = inputElement.value;
  const dueDate = dateElement.value;
  //   push the object
  todoList.push({ name, dueDate });
  // console.log(todoList);
  inputElement.value = "";
  getTodoList();
  // localStorage.setItem('todo', JSON.stringify(todoList));

}
*/

/*-----Main Idea of js--------
1.Save the data
2.Generate the html
3.Make it interactive

*/

/* --------steps to make todo-----------

create a function to add todo.
get the value of the input field.
add the value to the todoList array.
console.log the todoList array.
reset the input field value.

*/

