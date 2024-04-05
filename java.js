var todos = [];
var todoForm = document.getElementById('todo-form');

var todoList = document.getElementById('todo-list');

todoForm.onsubmit = function(e) {
    e.preventDefault();
    var newTodo = document.getElementById('new-todo').value;
    todos.push(newTodo);
    
    var todoItems = todos.map(function(todo) {
        return '<li>' + todo + '</li>';
    });
    todoList.innerHTML = todoItems.join('');
    document.getElementById('new-todo').value = '';
};