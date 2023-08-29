let serverPort = 4000

if(process.env.Node_Env !== 'development'){
    require('dotenv').config()
    serverPort = process.env.PORT
}

module.exports = {Port: serverPort}
