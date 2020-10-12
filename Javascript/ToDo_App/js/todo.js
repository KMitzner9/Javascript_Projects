
//this function gets the task from the input
function get_todos() {
    var todos = new Array;      //creates an array of inputed tasks
    var todos_str = localStorage.getItem('todo');   //pulls the task that was saved in the browswer memory
    if (todos_str !== null) {        //if the input is not null
        todos = JSON.parse(todos_str);      //JSON.parse will communicate with the browser to make the task a jS object
    }
    return todos;
}

//this function adds the inputed task to the get_todos function array
function add() {
    //takes the inputed task and creates a variable out of it
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);       //adds a new task to the end of the array
    //converts the task input into a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

//this function keeps tasks permanently displayed on the screen
function show() {
    //sets the task that was retrieved as a variable
    var todos = get_todos();
    //sets up each task as an unordered list
    var html = '<ul>';
    //displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        //displays the task and a button to remove it
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", remove);
    };
}

//this activates the Add Item button so that items are added when it is clicked
document.getElementById('add').addEventListener('click', add);
//this will display them permanently on the screen
show();