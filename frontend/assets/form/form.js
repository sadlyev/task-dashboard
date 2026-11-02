export function handleForm() {
    const formEl = document.createElement("form")
    formEl.innerHTML = `
        <div class="form-element">
        <input name="title" placeholder="title..."></input>
        <input name="description" placeholder="description..."></input>
        <input class="img-input" name="file" type="file"></input>
        <img class="display-img" src=""></img>
        <button class="btn-form" type="submit">Submit</button>
        </div>
        `
    document.querySelector(".container-task").append(formEl)

    const imgInput = document.querySelector(".img-input")
    imgInput.addEventListener("change", (event) => {
        event.preventDefault()
        const data = new FormData(formEl)

        const url = URL.createObjectURL((Object.fromEntries(data)).file)
        document.querySelector(".display-img").setAttribute("src", url)
    })

    formEl.addEventListener("submit", (event) => {
        event.preventDefault()

        const formdata = new FormData(formEl)

        const result = new Promise((resolve, reject) => {
            fetch("http://localhost:5000/create-task", {
                method: "POST",
                body: formdata
            }).then((response) => {
                if (!response.ok) {
                    throw new Error(`we failed ${response.status}`)
                } 

                return response.json()
            }).then((data) => {
                resolve(data)
            }).catch((err) => {
                reject(err)
                console.log(err)
            })
        })
    })

   



}