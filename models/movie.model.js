const mongo = require('mongoose');

const movieSchema = new mongo.Schema({
    name : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        required : true 
    },
    language : {
        type : String,
        required : true,
        default : "Hindi"
    },
    rating : {
        type : Number,
        required : false, 
    },
    cast : {
        type : [String],
        required : true
    },
    trailerUrl : {
        type : String,
        required : true
    },
    updatedAt : {
        type : Date,
        default : () => {
            return Date.now();
        }
    }
});

module.exports = mongo.model("Movie",movieSchema);