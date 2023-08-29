const Theatres = require('../models/theatre.model')
 

exports.createTheatre =async (req,res) => {
    const theatreReq = {
        name : req.body.name,
        description : req.body.description,
        city : req.body.city,
        pincode : req.body.pincode
    };
    try {
        const createdTheatre = await Theatres.create(theatreReq);
        res.status(201).send(createdTheatre);
    } catch (error) {
        console.log("something wrong",error.message)
        res.status(500).send("Internal error");
    }
};

exports.getAllTheatre = async(req,res) => {
    const page = req.query.p || 0
    const theatresPerPage = 2

    const getTheatre = await Theatres.find().skip(page*theatresPerPage).limit(theatresPerPage);

    res.status(200).send(getTheatre);
};