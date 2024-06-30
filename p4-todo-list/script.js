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
}

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

//
