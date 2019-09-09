const mongoose = require('mongoose');

let typeSchema = new mongoose.Schema({
    name: String,
    color: {
        type: String,
        default: 'red'
    }
})

typeSchema.virtual({
    ref: 'Pokemon',
    localField: '_id',
    foreignField: 'types'
})

module.exports = typeSchema