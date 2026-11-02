import express from "express"
import fs from "fs"

const router = express.Router()


router.patch("/update-task", (req, res) => {
    try {
        const db = JSON.parse(fs.readFileSync("./databases/fake-database.json", "utf-8"))
        console.log(req.body)
        const specific = db.task.find((el) => el.id == JSON.parse(req.body.id))
        
        specific.status = req.body.elStat
        console.log(specific)




        fs.writeFileSync("./databases/fake-database.json", JSON.stringify(db))

                return res.status(200)

    }catch(err) {
        console.log(err)
        return res.status(404).json({ message: "we failed"})
    }
})

export default router