import { Card } from "./assets/cardClasses.js";

const card = new Card("privet", "active", 2000, ["alo","privet"])



document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault()

    const url = window.location.href
    if (url == 'http://127.0.0.1:5500/frontend/index.html') {
        card.createCard()
    } else {
       console.log("id be different page") 
    }
})


window.addEventListener("popstate", (event) => {
    window.history.replaceState(null, null, 'http://127.0.0.1:5500/frontend/index.html')
})