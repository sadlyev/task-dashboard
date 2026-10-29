import { navigateTo } from "../helperFunctions/routing.js";
import { Card } from "./cardClasses.js";

export function boardCards() {

    const divContainer = document.createElement("div")
    divContainer.className = "task-overall"

    const navEl = document.createElement("nav")
    navEl.className = "tasks-navigation"

    const buttonEl = document.createElement("button")
    buttonEl.className = "task-btn"
    buttonEl.textContent = "Create a task"
    buttonEl.addEventListener("click", () => navigateTo("task.html"))
    navEl.append(buttonEl)
    const divEl = document.createElement('div')
    divEl.className = "tasks-container"
    const todoUlEl = document.createElement("ul")
    todoUlEl.className = "todo-container"
    const progressUlEl = document.createElement("ul")
    progressUlEl.className = "progress-container"
    const doneUlEl = document.createElement("ul")
    doneUlEl.className = "done-container"
    divEl.append(todoUlEl, progressUlEl, doneUlEl)
    divContainer.append(navEl,divEl)
    document.querySelector(".container").append( divContainer)

    const listOfTasks  = [
        {name: "handle button",status: "to do", time: 300, tags: ["important", "nigga"]},
        {name: "fix color",status: "to do", time: 300, tags: ["important", "nigga"]},
        {name: "change script",status: "in progress", time: 300, tags: ["important", "nigga"]},
        {name: "fix error",status: "done", time: 300, tags: ["important", "nigga"]}
    ]

    for (let i = 0; i < listOfTasks.length; i++) {
        if (listOfTasks[i].status == "to do") {

            const el = new Card(listOfTasks[i].name, listOfTasks[i].status,listOfTasks[i].time,listOfTasks[i].tags)
            el.createCard(todoUlEl)
        } else if (listOfTasks[i].status == "in progress") {

            const el = new Card(listOfTasks[i].name, listOfTasks[i].status,listOfTasks[i].time,listOfTasks[i].tags)
            el.createCard(progressUlEl)
        } else if (listOfTasks[i].status == "done") {

            const el = new Card(listOfTasks[i].name, listOfTasks[i].status,listOfTasks[i].time,listOfTasks[i].tags)
            el.createCard(doneUlEl)
        }
        
    }

}





