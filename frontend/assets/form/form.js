export function handleForm() {
    const formEl = document.createElement("form")
    formEl.className = "form-element";

    formEl.innerHTML = `
    <input name="title" type="text"></input>
    <input name="description" type="text"></input>
    <input name="file" type="file"></input>
    <img src="" class="img-form"></img>
    <button type="submit">Submit</button>`

    document.querySelector(".container-task").append(formEl)

    formEl.addEventListener("submit", (event) => {
        event.preventDefault()
        const data = new FormData(formEl)
        const actualData = Object.fromEntries(data.entries())
        const linkforimg = URL.createObjectURL(actualData.file)
        document.querySelector(".img-form").setAttribute("src", linkforimg)

    })

}