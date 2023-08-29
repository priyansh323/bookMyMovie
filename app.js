const express = require('express');
const {connectDB} = require('./db');
const bodyParser = require('body-parser')
const routes =require('./routes/theatre.routes')
const server = require('./configs/server.config')

const app = express();
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)
connectDB();

app.listen(server.Port, async () => {
    console.log('Application running on port : ', server.Port)
});