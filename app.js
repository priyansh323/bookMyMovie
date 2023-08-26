const express = require('express');
const mongo = require('mongoose');
const {creatTheatre} = require('./routes/theatre.routes');
const {createTheatre} = require('./controllers/theatres.controller');
const app = express();

mongo.connect('mongodb://0.0.0.0:27017/')
     .then(console.log('connected to mongo DB'))
     .catch((err) =>{
        console.log('Error : ', err);
    });


app.listen(4000, () => {
    console.log('Application running on port : 4000')
});

app.post('/mba/api/theatres',createTheatre)

app.get('/get', (req,res)=> {
    console.log("working");
    res.status(200).send("Hey Its working");
});
