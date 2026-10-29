import { handleForm } from "../form/form.js";
import { boardCards } from "../tasks/mainCards.js"

export function handleRouting() {
    const url = window.location.pathname

    if (url == "/" || url == "/frontend/index.html") {
        boardCards()
    } else if (url == "/frontend/task.html") {
        handleForm()
    }

    window.addEventListener("popstate", handleRouting);

}