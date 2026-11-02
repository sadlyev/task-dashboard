import express from "express"
import fs from "fs"

const router = express.Router()

router.get("/get-tasks", (req, res) => {
    try {
        const data = JSON.parse(fs.readFileSync("./databases/fake-database.json", "utf-8"))

        return res.status(202).json({message: data})

    }catch(err) {
        console.log(err)
    }
})

export default router