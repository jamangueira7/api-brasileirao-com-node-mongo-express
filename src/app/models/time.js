const mongoose = require('../../database');

const TimeSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Time = mongoose.model('Time', TimeSchema);

module.exports = Time;
