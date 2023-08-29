const theatreController = require('../controllers/theatres.controller')
const express = require('express')

const routes = express.Router();


routes.post('/theatres',theatreController.createTheatre);
routes.get('/theatres', theatreController.getAllTheatre);

module.exports = routes