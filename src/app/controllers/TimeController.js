const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Time = require('../models/time');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const times = await Time.find();

        return res.send({ times });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar times.' });
    }
});

router.get('/:timeId', async (req, res) => {
    try {
        const time = await Time.findById(req.params.timeId);

        return res.send(time);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar detalhe do time.' });
    }
});

router.post('/', async (req, res) => {
    try {

        const time = await Time.create(req.body);

        await time.save();

        return res.send({ time });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar time.', err });
    }
});

router.put('/:timeId', async (req, res) => {
    try {
        const { nome } = req.body;

        const time = await Time.findByIdAndUpdate(req.params.timeId,{
            nome,
        }, { new: true });

        await time.save();

        return res.send({ time });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao alterar o time.', err });
    }
});

router.delete('/:timeId', async (req, res) => {
    try {
        await Time.findByIdAndRemove(req.params.timeId);

        return res.send({ msg: 'Time excluido com sucesso.' });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao deletar time.' });
    }
});

module.exports = app => app.use('/time', router);
