const {createTheatre} = require('../controllers/theatres.controller')


const creatTheatre = (app) => {
    app.post('mba/api/theatres', createTheatre)
}

module.exports = {creatTheatre}