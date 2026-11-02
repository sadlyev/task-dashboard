import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"
import createtask from "./routes/createTask.js"
import gettask from "./routes/getTask.js"
import updatetask from "./routes/updatetask.js"

const app = express()

app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true,
  methods: ["POST", "PUT", "GET","PATCH","DELETE"]
}))

app.use(express.json())
app.use(cookieParser())

app.use("/", createtask)
app.use("/", gettask)
app.use("/", updatetask)



const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`"http://localhost:5000"`)
})