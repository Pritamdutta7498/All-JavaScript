let todoList = ["make dinner", "wash the dress"];

getTodoList();
function getTodoList() {
    let todoListHtml = "";


// generating the html using js
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p> `;
        todoListHtml += html;
    }
    console.log(todoListHtml);

    document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  todoList.push(name);
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
