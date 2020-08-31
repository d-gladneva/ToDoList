const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const headerButton = document.querySelector('.header-button');
const todoItem = document.querySelector('.todo-item');
const todoContainer = document.querySelector('.todo-container');
const textTodo = document.querySelector('.text-todo');

const todoData = JSON.parse(localStorage.getItem('todoData'))|| [];

const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item, i){
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">'+ item.value+'</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>'+
        '<button class="todo-complete"></button>'+
        '</div>';

            if (item.completed) {
                todoCompleted.append(li)
            } else {
                todoList.append(li)
            }

        const todoRemove = li.querySelector('.todo-remove');
        console.log(todoRemove);
        todoRemove.addEventListener('click', function () {
                todoData.splice(i, 1);
                localStorage.setItem('todoData', JSON.stringify(todoData));
                render();
        });
        const btnTodoComplete = li.querySelector('.todo-complete');
            btnTodoComplete.addEventListener('click', function(){
                item.completed = !item.completed;
                headerButton.addEventListener('click', function(){
                    localStorage.setItem('todoData', JSON.stringify(todoData));
                });
                localStorage.setItem('todoData', JSON.stringify(todoData));
                render();

            });


    });
};
render();

todoControl.addEventListener('submit', function(event){
    event.preventDefault();
    const newToDo = {
            value: headerInput.value,
            completed: false
    };
    if(headerInput.value) {
        todoData.push(newToDo);
        headerInput.value = '';
        localStorage.setItem('todoData', JSON.stringify(todoData));
        render();
    }
});
















