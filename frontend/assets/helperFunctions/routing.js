import { handleRouting } from "../router/router.js"

export function navigateTo(url) {
    history.pushState({}, "", url)
    handleRouting()
}