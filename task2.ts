//Create an interface with the following:

interface tasks {

// (a) An array of strings.
tasksArray: string[];

// (b) An addTask function which...
//      Receives a string as a paremeter.
//      Prints a message to console indicating insertion.
//      Returns the number of elements in the array after insertion.
addTask(task: string): number;

// (c) A listAllTasks function which...
//      Prints in the console all the tasks of the list.
listAllTasks(): void;

// (d) A deleteTask function which...
//      Receives a string as a parameter.
//      Prints a message in the console indicating the deletion.
//      Returns the number of elements in the array after deletion
deleteTask(task: string): number;
}

//Use the interface in a class.
class taskClass implements tasks {
    tasksArray = ["First String"];

    //All of the functions specified in the interface must be used by classes that implement them.
    addTask(task: string): number {
        let x = this.tasksArray.push(task); //push = add, basically.
        console.log("[String inserted into tasks array]");
        return x;
    }

    listAllTasks(): void {
        for(let num = 0; num < this.tasksArray.length; num++) {
            console.log("Item "+num+": "+this.tasksArray[num]);
        }
    }

    deleteTask(task: string): number {
        let index: number = this.tasksArray.indexOf(task);
        if(index >= 0)
        {
            this.tasksArray.splice(index, 1);
            console.log("[String removed from tasks array]");
        }
        else
        {
            console.log("[String provided not in array]");
        }
        return this.tasksArray.length;
    }
}

//Main
let sample: taskClass = new taskClass;

sample.addTask("Hello");
sample.addTask("World");
sample.listAllTasks();

sample.deleteTask("World");
sample.listAllTasks();