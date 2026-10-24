import cookieParser from "cookie-parser"
import express from "express"
import {cors} from "cors"

const app = express()

app.use(cors({
  origin: "http://127.0.0.1:5500",
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}))


const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`"http://localhost:5000"`)
})