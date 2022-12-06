const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const soulSchema = new  mongoose.Schema({
    _id : {
        type : Number,
        required: [true, "id is required"]
    },
    latitude: {
        type: Number,
        required : [false, "latitude is required"]
    },
    longitude : {
        type : Number,
        required: [false, "longtiude is required"],
    },
    emotion:{
        type: String,
        required:[false, "feeling is required"],
    },
    expired:{
        type:Boolean,
        required:[true, "check time is up"],
    }
})

module.exports = mongoose.model('emotioncoll', soulSchema)