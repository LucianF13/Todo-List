//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(e) {
  //Prevent form from submitting
  e.preventDefault();
  //Check if something is written
  if ( todoInput.value.length > 0 ) {
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.appendChild(document.createTextNode(todoInput.value));
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoInput.value = '';
    //Check mark Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);
    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //Append To List
    todoList.appendChild(todoDiv);
  }
}

function deleteCheck(e) {
  const item = e.target;
  //Delete Todo
  if (item.classList[0] === 'trash-btn') {
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function() {
      todo.remove();
    })
  }
  //Check Mark
  if (item.classList[0] === 'complete-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}