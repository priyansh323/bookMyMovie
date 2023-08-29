const mongo = require('mongoose');


const theatreSchema = mongo.Schema({

    name : {
        type : String,
        required : true 
    },
    description : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },
    // movies : {
    //     type : [mongo.SchemaTypes.ObjectId],
    //     ref : 'Movie'
    // },
    createdAt: {
        type: Date,
        immutable: true, 
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongo.model('Theatres',theatreSchema);
