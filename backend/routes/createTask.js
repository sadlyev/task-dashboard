import express from "express"
import multer from "multer"
import fs from "fs"

const router = express.Router()

const storage = multer.diskStorage({
    destination: "./imgs",
    filename: (req, file, cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        req.namefile = filename
        cb(null, filename)
    }
})

const upload = multer({storage})

router.post("/create-task", upload.single("file"), (req, res) => {
    try {
       const db = fs.readFileSync("./databases/fake-database.json", "utf-8")
       const data = JSON.parse(db)
       const obj = new Object({title: req.body.title, description: req.body.description, img_path: req.namefile})
       data.task.push(obj)

       fs.writeFileSync("./databases/fake-database.json", JSON.stringify(data))

       return res.status(200).json({message: "all ok"})

    }catch(err) {
        console.log(err)
        return res.status(404).json({message: "we failed"})
    }
})

export default router