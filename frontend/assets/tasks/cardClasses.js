export class Card {
    constructor(id, name, description, status, url) {
            this.name = name
            this.description = description,
            this.status = status,
            this.url = url,
            this.id = id
    }

    createCard(parentEl) {
        this.liElement = document.createElement("li")
        this.liElement.className = "li-task"
        this.liElement.innerHTML = `
            <span class="task-id">${this.id}</span>
            <span>${this.name}</span>
            <span>${this.description}</span>
            <select name="status">
                <option value="to do" ${this.status == "to do" && "selected"}>To Do</option>
                <option value="in progress" ${this.status == "in progress" && "selected"}>In Progress</option>
                <option value="done" ${this.status == "done" && "selected"}>Done</option>
            </select>
           
            <img width="100px" src='${this.url}'></img>
        `

        parentEl.append(this.liElement)
    }

    changeStatus(stat) {
        this.status = stat
    }
}