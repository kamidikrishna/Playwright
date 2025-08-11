const input = document.querySelector('input');
const button = document.querySelector('button');
const todoList = document.querySelector('.todo-list');

button.addEventListener('click', () => {
    const todoValue = input.value;
    const todoItem = document.createElement('li');
    todoItem.textContent = todoValue;
    todoList.append(todoItem);
});