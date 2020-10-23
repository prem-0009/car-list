const mongoose = require('mongoose');
const moment = require('moment');

const CarSchema = new mongoose.Schema({
    name:{type: String, unique: true, lowercase: true, required: true},
    type:{type: String, required: false},
    // year:{type: String, default:()=>moment.formar(`YYYY`), required: true},
})

module.exports = mongoose.model('car',CarSchema)