const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://apriorifoxdev:zm7c15000932@extasea.ds7tsdc.mongodb.net/extasea?retryWrites=true&w=majority")
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB