const Theatre = require('../models/theatre.model')

const createTheatre = async(req,res)=>{
    const theatreReq = {
        name : req.body.name,
        description : req.body.description,
        city : req.body.city,
        pincode : req.body.pincode
    };

    const createTheatreInDb = await Theatre.create(theatreReq);

    res.status(201)
    .send(createTheatreInDb)
    .catch((err) =>{
        console.log(err)
    })
};

module.exports= {createTheatre}
