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

    vitoria: {
        type: String,
        require: true,
        default: "0",
    },

    derrota: {
        type: String,
        require: true,
        default: "0",
    },

    empate: {
        type: String,
        require: true,
        default: "0",
    },

    gols_pro: {
        type: String,
        require: true,
    },

    gols_contra: {
        type: String,
        require: true,
    },
    gols_saldo: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Rodada = mongoose.model('Rodada', RodadaSchema);

module.exports = Rodada;
