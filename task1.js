// (a) Create an array of strings
var tasks = ["First String"];
// (b) Create an addTask function that:
//      Receives a parameter called task.
//      Adds the task to the array.
//      Prints a message to console indicating insertion.
//      Return the number of elements in the array.
function addTask(task) {
    var x = tasks.push(task); //push = add, basically.
    console.log("[String inserted into tasks array]");
    return x;
}
// (c) Create a listAllTasks function:
//      It iterates over all the tasks in the array.
//      It prints each array item to the console.
function listAllTasks() {
    for (var num = 0; num < tasks.length; num++) {
        console.log("Item " + num + ": " + tasks[num]);
    }
}
// (d) Create a deleteTask function:
//      Receives a parameter called task.
//      Removes that string from the array.
//      Prints a message to console indicating deletion.
//      Return the number of elements in the array.
function deleteTask(task) {
    var index = tasks.indexOf(task);
    if (index > 0) {
        tasks.splice(index, 1);
        console.log("[String removed from tasks array]");
    }
    else {
        console.log("[String provided not in array]");
    }
    return tasks.length;
}
//Main
addTask("Hello");
listAllTasks();
addTask("World");
listAllTasks();
deleteTask("World");
listAllTasks();
