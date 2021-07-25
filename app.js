const containerDiv = document.getElementById("container");
const todoInput = document.getElementById("todo-input");
const submitButton = document.getElementById("todo-submit");
const tasksInProgress = document.getElementById("tasks-inprogress");
const tasksDone = document.getElementById("tasks-done");

todoInput.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === 'Enter') {
        document.getElementById("todo-submit").click();
    }
});

function newTask(taskText) {
    let todoDiv = document.createElement("div");
    todoDiv.className = "tasks-inprogress tasks-row";
    todoDiv.id = Date.now();

    let tasksCreated = document.createElement("div");
    tasksCreated.className = "tasks-created";
    
    let tasksButtons = document.createElement("div");
    tasksButtons.className = "tasks-buttons";
    
    let editTodo = document.createElement("input");
    editTodo.type = "button";
    editTodo.value = "Edit";
    editTodo.className = "todo-edit";
    editTodo.id = Date.now();
    
    let deleteTodo = document.createElement("input");
    deleteTodo.type = "button";
    deleteTodo.value = "Delete";
    deleteTodo.className = "todo-delete";
    deleteTodo.id = Date.now();
    
    tasksCreated.append(taskText);
    tasksButtons.append(editTodo);
    tasksButtons.append(deleteTodo);
    
    todoDiv.append(tasksCreated);
    todoDiv.append(tasksButtons);

    tasksInProgress.append(todoDiv);
    
    editTodo.onclick = function() {
        editTodoF(todoDiv.id);
    };
    
    deleteTodo.onclick = function() {
        deleteTodoF(todoDiv.id);
    };

    document.getElementById("todo-input").value = "";
    
    todoInput.focus();
}

function createToDo() {
    newTask(todoInput.value);
};

function displayTodo(itemId) {

};

function editTodoF(editId) {
    let editTodoItem = document.getElementById(editId);

    let editArea = document.createElement("input");
    editArea.className = "todo-input";
    editArea.value = editTodoItem.textContent;
    editAreaId = editArea.id = Date.now();

    
    let saveTodo = document.createElement("input");
    saveTodo.type = "button";
    saveTodo.value = "Update";
    saveTodo.className = "todo-update";
    saveTodoId = saveTodo.id = Date.now();
    
    editArea.addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
            document.getElementById(saveTodoId).click();
        }
    });

    editTodoItem.childNodes[0].textContent = "";
    editTodoItem.childNodes[1].className = "tasks-buttons-hidden";
    editTodoItem.append(editArea);
    editArea.focus();

    editTodoItem.append(saveTodo);

    saveTodo.onclick = function() {
        updateTodoF(editId, editAreaId);
    };
}

function deleteTodoF(editId) {
    let editTodoItem = document.getElementById(editId);
    editTodoItem.parentNode.removeChild(editTodoItem);
};

function updateTodoF(editId, editAreaId) {

    newEdit = document.getElementById(editId);
    editItem = document.getElementById(editAreaId);
    
    newEdit.childNodes[0].textContent = editItem.value;
    newEdit.childNodes[1].className = "tasks-buttons";
    newEdit.childNodes[2].remove();
    newEdit.childNodes[2].remove();

    editItem.textContent = "";
};
