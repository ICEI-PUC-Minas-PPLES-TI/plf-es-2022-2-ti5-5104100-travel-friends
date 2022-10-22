const mongoose = require('mongoose')

const RoadMap = mongoose.model('RoadMap', {
    title: String,
    description: String,
    limitPerson: Number,
    sponsor: String,
    dataStart: Date,
    dataEnd: Date,
    dataImage:[
        {
            0: String,
            1: String,
            2: String,
        }
    ],
    guide:[
        {
            title: String,
            description: String,
            hours: Date,
        },{
            title: String,
            description: String,
            hours: Date,
        }
    ],
    isFree: Boolean,
})

module.exports = RoadMap