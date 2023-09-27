const express = require('express')
const mongoose = require("mongoose")
const cors = require('cors')
require('dotenv').config()

const MONGOURI = process.env.MONGOURI

const databaseConnect = async () => {
    try{
        await mongoose
        .connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        console.log("DB ok");
    }
    catch (error) {console.log("DB error => ",error)}
}



const app = express()

const PORT = process.env.PORT


app.use(cors())
app.use(express.json({extended: true}))

databaseConnect()

app.use('/api/items', require("./routes/items.routes"))


app.listen(PORT, ()=> {
    console.log(`Server has been started on server ${PORT}`)
    } 
)

