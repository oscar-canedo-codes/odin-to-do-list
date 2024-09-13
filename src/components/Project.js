import { toDate, isToday, isThisWeek, subDays } from 'date-fns'

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    setName(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    setTasks(tasks) {
        this.tasks = tasks
    }

    getTasks() {
        return this.tasks
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName)
    }

    checkForTask(taskName) {
        return this.tasks.some((task) => task.getName() === taskName)
    }

    addTask(newTask) {
        if (!this.checkForTask(newTask.name)) {
            this.tasks.push(newTask);
        }
    }

    deleteTask(taskName) {
        const updatedTasks = this.tasks.filter((task) => task.getName() !== taskName);
        this.tasks = updatedTasks;
    }

    filterTasksForToday() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isToday(toDate(taskDate))
        })
    }

    filterTasksForThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted())
            return isThisWeek(subDays(toDate(taskDate), 1))
        })
    }
}