export class Card {
    constructor(name, status, time, tags) {
            this.name = name
            this.status = status,
            this.time = time
            this.tags = tags
    }

    createCard(parentEl) {
        this.liElement = document.createElement("li")
        this.liElement.innerHTML = `
            <span>${this.name}</span>
            <span>${this.status}</span>
        `

        parentEl.append(this.liElement)
    }
}