const todoList = [];

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const todoName = inputElement.value;
    todoList.push(todoName);
    console.log(todoList);
    inputElement.value = '';


}

/* --------steps to make todo-----------

create a function to add todo.
get the value of the input field.
add the value to the todoList array.
console.log the todoList array.
reset the input field value.
 


*/