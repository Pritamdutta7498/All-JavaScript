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
    completed: false,
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

// function renderTodoList() {
//   const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   todoListElement.innerHTML = "";

//   // Loop through the todo list and create HTML elements for each item
//   todoList.forEach((todoItem, index) => {
//     const todoElement = document.createElement("div");
//     todoElement.className = "todo-item";
//     todoElement.innerHTML = `
//       <span>${todoItem.name}</span>
//       <span>${todoItem.date}</span>
// <button onclick="toggleComplete(${index})" class="todo-complete-btn ${
//       todoItem.completed ? "completed" : ""
//     }">
//   Complete
// </button>
//       <button onclick="deleteTodo(${index})" class="todo-delete-btn">Delete</button>
//     `;
//     todoListElement.appendChild(todoElement);
//   });
// }
//-------------
// Add a modal window element to the HTML
const modalElement = document.createElement("div");
modalElement.className = "modal";
modalElement.innerHTML = `
  <div class="modal-content">
    <img src="./cn.gif" alt="Checked">
  </div>
`;
document.body.appendChild(modalElement);

// Add a function to toggle the modal window
function toggleModal() {
  const modalElement = document.querySelector(".modal");

  modalElement.classList.toggle("show");
  setTimeout(() => {
    modalElement.classList.remove("show");
  }, 3000);
}

// Update the complete button to toggle the modal window
// function renderTodoList() {
//   const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   todoListElement.innerHTML = "";

//   todoList.forEach((todoItem, index) => {
//     const todoElement = document.createElement("div");
//     todoElement.className = "todo-item";
//     todoElement.innerHTML = `
//       <span>${todoItem.name}</span>
//       <span>${todoItem.date}</span>
//       <button onclick="toggleComplete(${index}); toggleModal()" class="todo-complete-btn ${
//         todoItem.completed? "completed" : ""
//       }">
//         Complete
//       </button>
//       <button onclick="deleteTodo(${index})" class="todo-delete-btn">Delete</button>
//     `;
//     todoListElement.appendChild(todoElement);
//   });
// }
function renderTodoList() {
  const todoList = JSON.parse(localStorage.getItem("todoList")) || []

  todoListElement.innerHTML = ""

  todoList.forEach((todoItem, index) => {
    const todoElement = document.createElement("div")
    todoElement.className = "todo-item"
    todoElement.innerHTML = `
      <span>${todoItem.name}</span>
      <span>${todoItem.date}</span>
      <button onclick="toggleComplete(${index}); toggleModal()" class="todo-complete-btn ${todoItem.completed? 'completed' : ''}">
        ${todoItem.completed? 'Completed' : 'Complete'}
      </button>
      <button onclick="deleteTodo(${index})" class="todo-delete-btn">Delete</button>
    `

    // Add the 'show' class to the modal element before appending the new todo item
    if (!todoItem.completed) {
      toggleModal()
    }

    todoListElement.appendChild(todoElement)
  })
}
// Update the toggleComplete function to update the todo item's completed status
// function toggleComplete(index) {

//   let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   if (!todoList[index].completed) {
//     todoList[index].completed = true;
//     // Show the modal window with the GIF
//     toggleModal();
//   }
//   // Save the updated todo list to localStorage
//   localStorage.setItem("todoList", JSON.stringify(todoList));

//   renderTodoList();
// }
// function toggleComplete(index) {
//   let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   if (!todoList[index].completed) {
//     todoList[index].completed = true;

//     // Update the button's text and class immediately
//     const completeButton = document.querySelectorAll('.todo-complete-btn')[index];
//     completeButton.textContent = 'Completed';
//     completeButton.classList.add('completed');

//     // Show the modal window with the GIF
//     toggleModal();
//   }

//   // Save the updated todo list to localStorage
//   localStorage.setItem("todoList", JSON.stringify(todoList));

//   renderTodoList();
// }
// function toggleComplete(index) {
//   let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   if (!todoList[index].completed) {
//     todoList[index].completed = true;

//     // Update the button's text and class immediately
//     const completeButton = document.querySelectorAll('.todo-complete-btn')[index];
//     completeButton.textContent = 'Completed';
//     completeButton.classList.add('completed');

//     // Show the modal window with the GIF
//     toggleModal();
//   }

//   localStorage.setItem("todoList", JSON.stringify(todoList));
//   renderTodoList();
// }
function toggleComplete(index) {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || []

  if (!todoList[index].completed) {
    todoList[index].completed = true

    // Update the button's text and class immediately
    const completeButton = document.querySelectorAll('.todo-complete-btn')[index]
    completeButton.textContent = 'Completed'
    completeButton.classList.add('completed')

    // Show the modal window with the GIF
    toggleModal()
  }

  localStorage.setItem("todoList", JSON.stringify(todoList))
  renderTodoList()
}
// Function to delete a todo item
function deleteTodo(index) {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  todoList.splice(index, 1);

  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));

  renderTodoList();
}

// Function to toggle complete status of a todo item
// function toggleComplete(index) {
//   let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

//   todoList[index].completed = !todoList[index].completed;

//   // Save the updated todo list to localStorage
//   localStorage.setItem("todoList", JSON.stringify(todoList));

//   renderTodoList();
// }

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
