//Create an interface with the following:
//Use the interface in a class.
var taskClass = /** @class */ (function () {
    function taskClass() {
        this.tasksArray = ["First String"];
    }
    taskClass.prototype.addTask = function (task) {
        var x = this.tasksArray.push(task); //push = add, basically.
        console.log("[String inserted into tasks array]");
        return x;
    };
    taskClass.prototype.listAllTasks = function () {
        for (var num = 0; num < this.tasksArray.length; num++) {
            console.log("Item " + num + ": " + this.tasksArray[num]);
        }
    };
    taskClass.prototype.deleteTask = function (task) {
        var index = this.tasksArray.indexOf(task);
        if (index >= 0) {
            this.tasksArray.splice(index, 1);
            console.log("[String removed from tasks array]");
        }
        else {
            console.log("[String provided not in array]");
        }
        return this.tasksArray.length;
    };
    return taskClass;
}());
//Main
var sample = new taskClass;
sample.addTask("Hello");
sample.addTask("World");
sample.listAllTasks();
sample.deleteTask("World");
sample.listAllTasks();
