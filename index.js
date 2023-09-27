const express = require('express')
require('dotenv').config()



const app = express()

const PORT = process.env.PORT

app.use(express.json({extended: true}))

const connectDB = require("./connectMongo")
const Item = require('./models/Item')

connectDB()


app.use('/api/items', async (req, res) => {
    try {
        const item = await Item.find()
        res.json(item)
    } catch (error) {
        console.log(error)
    }
})


app.listen(PORT, ()=> {
    console.log(`Server has been started on server ${PORT}`)
    } 
)

