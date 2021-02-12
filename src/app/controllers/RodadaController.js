const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Rodada = require('../models/rodada');

const router = express.Router();

router.use(authMiddleware);

router.get('/:ano/:rodadaId', async (req, res) => {
    try {
        const { ano, rodadaId } = req.params;

        const jogosRodada = await Rodada.find({
            ano,
            rodada: rodadaId,
        }).sort({
            gols_saldo: -1,
            gols_pro: -1,
            gols_contra: 1,
        });
    //.populate(['time']).
        return res.send(jogosRodada);

    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar detalhe do time.' });
    }
});

module.exports = app => app.use('/rodadas', router);
