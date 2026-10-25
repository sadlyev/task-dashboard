export class Card {
    constructor(name, status, time, tags) {
            this.name = name
            this.status = status,
            this.time = time
            this.tags = tags
    }

    createCard() {
        const divEl = document.querySelector(".container")
        this.liElement = document.createElement("li")
        this.liElement.innerHTML = `
        <div>
            <span>${this.name}</span>
            <span>${this.status}</span>
        </div>
        `

        divEl.append(this.liElement)
    }
}