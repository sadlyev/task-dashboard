import { handleRouting } from "../router/router.js"

export function navigateTo(url) {
    window.location.assign(url)
}