const express = require('express')
const app = express()


require('dotenv').config()

app.use(express.json())

const connectDB = require("./connectMongo")

connectDB()

const Item = require('./models/Item')

app.use('/api/items', async (req, res) => {
    try {
        const item = await Item.find()
        res.json(item)
    } catch (error) {
        console.log(error)
    }
})

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Server has been started on port ${PORT}`)
    } 
)

