let ctr = 0;

function createToDo() {
    let todo = document.getElementById("todoTextField").value;
    document.getElementById("todoTextField").focus();
    let paragraph = document.createElement("p");
    paragraph.id = ctr + "t";
    paragraph.append(todo);
    
    let editTodo = document.createElement("button");
    let deleteTodo = document.createElement("button");
    
    document.getElementById("main").appendChild(paragraph);
    
    
    editTodo.id = ctr + "e";
    deleteTodo.id = ctr + "d";
    editTodo.innerHTML = "Edit";
    document.getElementById(paragraph.id).appendChild(editTodo);
    deleteTodo.innerHTML = "Delete";
    document.getElementById(paragraph.id).appendChild(deleteTodo);
    
    
    editTodo.onclick = function() {
        editTodoF(paragraph.id);
    };

    deleteTodo.onclick = function() {
        deleteTodoF(paragraph.id);
    };
    document.getElementById("todoTextField").value = "";
    
    ctr++;
};

function editTodoF(editId) {
    let editTodoItem = document.getElementById(editId).firstChild.nodeValue;

    let editArea = document.createElement("input");
    editArea.value = editTodoItem;
    editAreaId = editArea.id = ctr + "ee";


    
    let saveBtn = document.createElement("button");
    
    saveBtn.innerHTML = "update";
    
    document.getElementById(editId).innerHTML = "";
    document.getElementById(editId).append(editArea);
    editArea.focus();


    document.getElementById(editId).append(saveBtn);

    saveBtn.onclick = function() {
        updateTodoF(editId, editAreaId, editId);
    };
}

function deleteTodoF(editId) {
    let editTodoItem = document.getElementById(editId);
    editTodoItem.parentNode.removeChild(editTodoItem);
};

function updateTodoF(editId, editAreaId, paragraphId) {

    editItem = document.getElementById(editAreaId);
    newEdit = document.getElementById(editId);

    
    newEdit.innerHTML = "";
    document.getElementById(editId).append(editItem.value);


    let editTodo = document.createElement("button");
    let deleteTodo = document.createElement("button");
    
    
    
    editTodo.id = ctr + "eee";
    deleteTodo.id = ctr + "ddd";
    editTodo.innerHTML = "Edit";
    deleteTodo.innerHTML = "Delete";

    document.getElementById(editId).appendChild(editTodo);
    document.getElementById(editId).appendChild(deleteTodo);
    
    
    editTodo.onclick = function() {
        editTodoF(paragraphId);
    };

    deleteTodo.onclick = function() {
        deleteTodoF(paragraphId);
    };
    
    ctr++;
};