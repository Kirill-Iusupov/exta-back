const express = require('express')
const cors = require('cors')
require('dotenv').config()



const app = express()

const PORT = process.env.PORT

app.use(express.json({extended: true}))

const connectDB = require("./connectMongo")

connectDB()


app.use('/api/items', require("./routes/items.routes"))


app.listen(PORT, ()=> {
    console.log(`Server has been started on server ${PORT}`)
    } 
)

