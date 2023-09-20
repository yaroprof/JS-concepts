// Class constructor syntax

class Task {
  constructor(description, dueDate) {
    this.description = description;
    this.dueDate = dueDate;
    this.isCompleted = false;
  }

  complete(){
    this.isCompleted = true
  }

  toString() {
    const status = this.isCompleted ? "completed" : "not completed"
    return `${this.description} (due ${this.dueDate}): ${status}`;
  }
}

class TaskList {
  constructor() {
    this.tasks = [];
  }
  addTasks(task) {
    this.tasks.push(task);
  }
  getTasks() {
    return this.tasks;
  }
  toString() {
    return `Task List (${this.tasks.length} tasks):\n${this.tasks.join("\n")}`;

  }
}

const task1 = new Task('Bue vegetables', '2023-05-15');
const task2 = new Task('Have dinner', '2023-05-15');


const taskList = new TaskList();
taskList.addTasks(task1);
taskList.addTasks(task2);
task1.complete()
task2.complete()

console.log(taskList.toString());


// The toString() method in the Task class returns a string representation of an individual task that includes the task's description, due date, and completion status. It uses a ternary operator to set the status variable based on the value of the isCompleted property, and then returns a template string that includes the description, dueDate, and status.

// The toString() method in the TaskList class, on the other hand, returns a string representation of the entire task list. It includes the number of tasks in the list and a string representation of each task (obtained by calling join() on the array of tasks, using a newline character as the separator). The Task class's toString() method is called for each task in the array to obtain its string representation.

// So, the difference is that the toString() method in the Task class returns a string representation of an individual task, while the toString() method in the TaskList class returns a string representation of the entire task list.