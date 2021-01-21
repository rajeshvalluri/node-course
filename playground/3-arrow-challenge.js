//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // getTasksToDo: function () {
    //     const toDoTasks = this.tasks.filter(function(item) {
    //         return item.completed === false
    //     })
    //     return toDoTasks
    // }
    getTasksToDo() {
        const toDoTasks = this.tasks.filter( (item) => {
            return item.completed === false
        })
        return toDoTasks
    }
}

console.log(tasks.getTasksToDo())
