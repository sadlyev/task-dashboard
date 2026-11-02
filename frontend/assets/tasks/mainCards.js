import { navigateTo } from "../helperFunctions/routing.js";
import { Card } from "./cardClasses.js";

export async function boardCards() {

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


     const result =  await fetch("http://localhost:5000/get-tasks", {
            method: "GET",
        }).then((response) => {
            if (!response.ok) {
                throw new Error("we failed")
            }
            return response.json()
        }).catch((err) => {
            throw err
        })


        for (let i = 0; i < result.message.task.length; i++) {
            if (result.message.task[i].status == "to do") {
                const card = new Card(result.message.task[i].id, result.message.task[i].title, result.message.task[i].description, result.message.task[i].status, result.message.task[i].img_path)
                card.createCard(todoUlEl)
            }

            if (result.message.task[i].status == "in progress") {
                const card = new Card(result.message.task[i].id, result.message.task[i].title, result.message.task[i].description, result.message.task[i].status, result.message.task[i].img_path)
                card.createCard(progressUlEl)
            }


            if (result.message.task[i].status == "done") {
                const card = new Card(result.message.task[i].id, result.message.task[i].title, result.message.task[i].description, result.message.task[i].status, result.message.task[i].img_path)
                card.createCard(doneUlEl)
            }
        }

        const els = document.querySelectorAll(".li-task")

        els.forEach((el) => {
            const select = el.querySelector("select")
            select.addEventListener("change", async (event) => {
                event.preventDefault()
                
                const sibling = el.querySelector(".task-id")

                    const request = await fetch("http://localhost:5000/update-task", {
                        method: "PATCH", 
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({id: sibling.textContent, elStat: select.value})
                    }).then((response) => {
                        if (!response.ok) {
                            throw new Error("we failed")
                        }

                        response.json()
                        
                    }).catch((err) => {
                        console.log("alo")
                    })

                    console.log(request)
            })
        })




   
       
        
    

}





