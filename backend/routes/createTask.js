import "dotenv/config"
import express from "express"
import multer from "multer"
import fs from "fs"
import ImageKit from "imagekit"


const router = express.Router()


const upload = multer({storage: multer.memoryStorage()})

const imgKit = new ImageKit({
    publicKey: process.env.imgkit_public_key,
    privateKey: process.env.imgkit_private_key,
    urlEndpoint: process.env.imgkit_url_key
})

router.post("/create-task", upload.single("file"), async (req, res) => {
    try {
       const db = fs.readFileSync("./databases/fake-database.json", "utf-8")
       const data = JSON.parse(db)

       const result = await imgKit.upload({
        file: req.file.buffer,
        fileName: req.file.originalname
       })

       const length = data.task.length
       const obj = new Object({id: length + 1, title: req.body.title, description: req.body.description, status: "to do", img_path: result.url})
       data.task.push(obj)

       fs.writeFileSync("./databases/fake-database.json", JSON.stringify(data))

       return res.status(200).json({message: "all ok"})

    }catch(err) {
        console.log(err)
        return res.status(404).json({message: "we failed"})
    }
})

export default router