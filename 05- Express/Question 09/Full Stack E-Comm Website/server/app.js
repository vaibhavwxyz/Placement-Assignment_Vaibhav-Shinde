import express from "express"
// Route Imports
import productRoute from "./src/routes/productRoute.js"

import errorMiddleWare from "./src/middlewares/error.js"

const app = express()
app.use(express.json())

app.use("/api/v1", productRoute)

app.use(errorMiddleWare)

export default app