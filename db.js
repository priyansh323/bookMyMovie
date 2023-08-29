const dbConfig = require('./configs/db.config')
const { mongoose } = require('mongoose')

let dbConnection;
module.exports = {
    connectDB: () => {
        mongoose.connect(dbConfig.DB_URL)
        const db = mongoose.connection
        db.on("error", () => console.log("Can't connect to DB"))
        db.once("open", () => console.log("Connected to Mongo DB"))
    }
}


