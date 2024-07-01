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

  //update the HTML
  renderTodoList();
}

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

function renderTodoList() {
  const todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  todoListElement.innerHTML = "";

  todoList.forEach((todoItem, index) => {
    const todoElement = document.createElement("div");
    todoElement.className = "todo-item";
    todoElement.innerHTML = `
      <span>${todoItem.name}</span>
      <span>${todoItem.date}</span>
      <button onclick="toggleComplete(${index})" class="todo-complete-btn 
      ${todoItem.completed ? "completed" : "blue-btn"}">
      ${todoItem.completed ? "Completed" : "Complete"}
      </button>
      <button onclick="deleteTodo(${index})" class="todo-delete-btn">Delete</button>
    `;
    todoListElement.appendChild(todoElement);
  });
}
function toggleComplete(index) {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

  if (!todoList[index].completed) {
    todoList[index].completed = true;
    // Show the modal window with the GIF
    toggleModal();
    // Change the button color to green after showing the GIF
    setTimeout(() => {
      const completeButton =
        document.querySelectorAll(".todo-complete-btn")[index];
      completeButton.classList.remove("blue-btn");
      completeButton.classList.add("completed");
    }, 5000);
  }
  // Save the updated todo list to localStorage
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
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
