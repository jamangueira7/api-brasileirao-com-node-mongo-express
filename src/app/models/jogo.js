const mongoose = require('../../database');

const JogoSchema = new mongoose.Schema({
    ano: {
        type: Number,
        require: true,
    },

    visitante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Time',
        require: true,
    },

    mandante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Time',
        require: true,
    },

    rodada: {
        type: Number,
        require: true,
    },

    placar_visitante: {
        type: Number,
        require: true,
    },

    placar_mandante: {
        type: Number,
        require: true,
    },
    vencedor: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Jogo = mongoose.model('Jogo', JogoSchema);

module.exports = Jogo;
