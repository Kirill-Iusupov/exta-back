const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

const MONGOURI = process.env.MONGOURI
mongoose
    .connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=> console.log("DB ok"))
    .catch((error)=> console.log("DB error => ",error))





const app = express()

const PORT = process.env.PORT


app.use(cors())
app.use(express.json({extended: true}))

app.use('/api/items', require("./routes/items.routes"))


app.listen(PORT, ()=> {
    console.log(`Server has been started on server ${PORT}`)
    } 
)

