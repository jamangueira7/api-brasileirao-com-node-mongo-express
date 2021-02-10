const mongoose = require('../../database');

const RodadaSchema = new mongoose.Schema({
    ano: {
        type: Number,
        require: true,
    },

    time: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Time',
        require: true,
    },

    rodada: {
        type: Number,
        require: true,
    },

    gols_pro: {
        type: Number,
        require: true,
    },

    gols_contra: {
        type: Number,
        require: true,
    },
    gols_saldo: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Rodada = mongoose.model('Rodada', RodadaSchema);

module.exports = Rodada;