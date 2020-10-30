const mongoose = require('mongoose');



const CarSchema = new mongoose.Schema({
    name:{type: String, unique: true, lowercase: true, required: true},
    type:{type: String, required: true},
    year:{type: String ,  required: true},
})

module.exports = mongoose.model('car',CarSchema)

//i am the master



//i am the branch
