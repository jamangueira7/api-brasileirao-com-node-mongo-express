const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Jogo = require('../models/jogo');
const Rodada = require('../models/rodada');

const router = express.Router();

router.use(authMiddleware);

router.get('/:ano/:rodada', async (req, res) => {
    try {
        const { ano, rodada } = req.params;

        const jogos = await Jogo.find({
            ano,
            rodada,
        }).populate(['visitante', 'mandante']);

        return res.send({ jogos });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar jogos por ano e rodada' });
    }
});

router.get('/time/:ano/:timeId', async (req, res) => {
    try {
        const { ano, timeId } = req.params;

        const jogos = await Jogo.find({
            ano,
        }).or([
            {'visitante':timeId},
            {'mandante':timeId}
        ]).populate(['visitante', 'mandante']);

        return res.send({ jogos });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar jogos por ano e time' });
    }
});

router.post('/', async (req, res) => {
    try {
        const {
            ano,
            rodada,
            visitante,
            mandante,
            placar_visitante,
            placar_mandante,
            vencedor,
        } = req.body;

        
        if(visitante === mandante) {
            return res.status(400).send({ error: 'É necessario que dois times sejam enviados' });
        }

        const timeMandante = await Jogo.find({
            ano,
            rodada,
        }).or([
            {'visitante':mandante},
            {'mandante':mandante}
        ]).populate(['visitante', 'mandante']);



        if(timeMandante.length > 0) {
            return res.status(400).send({ error: 'O time mandante já jogou nessa roda esse ano' });
        }



        const timeVisitante = await Jogo.find({
            ano,
            rodada,
        }).or([
            {'visitante':visitante},
            {'mandante':visitante}
        ]);


        if(timeVisitante.length > 0) {
            return res.status(400).send({ error: 'O time visitante já jogou nessa roda esse ano' });
        }

        const rodadaAnteriorCount = rodada > 1 ? rodada - 1 : rodada;


        const rodadaAnteriorVisitante = await Rodada.find({
            ano,
            rodada: rodadaAnteriorCount,
            time: visitante,
        });

        if(rodadaAnteriorVisitante.length == 0 && rodadaAnteriorCount !== 1) {
            return res.status(400).send({
                error: `É necessario cadastrar as rodadas em ordem cronológica. O visitante não tem a rodada ${rodadaAnteriorCount}.`
            });
        }

        const rodadaAnteriorMandante = await Rodada.find({
            ano,
            rodada: rodadaAnteriorCount,
            time: mandante,
        });

        if(rodadaAnteriorMandante.length == 0 && rodadaAnteriorCount !== 1) {
            return res.status(400).send({
                error: `É necessario cadastrar as rodadas em ordem cronológica. O mantante não tem a rodada ${rodadaAnteriorCount}.`
            });
        }

        const gols_pro_visitante = rodadaAnteriorCount == 1 ? placar_visitante :rodadaAnteriorVisitante.gols_pro;
        const gols_contra_visitante = rodadaAnteriorCount == 1 ? placar_mandante :rodadaAnteriorVisitante.gols_contra;
        const gols_saldo_visitante = gols_pro_visitante - gols_contra_visitante;


        const rodadaModelVisitante = await Rodada.create({
            ano,
            rodada,
            visitante,
            gols_pro: gols_pro_visitante,
            gols_contra: gols_contra_visitante,
            gols_saldo: gols_saldo_visitante,
        });

        const gols_pro_mandante = rodadaAnteriorCount == 1 ? placar_mandante :rodadaAnteriorMandante.gols_pro;
        const gols_contra_mandante = rodadaAnteriorCount == 1 ? placar_visitante :rodadaAnteriorMandante.gols_contra;
        const gols_saldo_mandante = gols_pro_mandante - gols_contra_mandante;

        const rodadaModelMandante = await Rodada.create({
            ano,
            rodada,
            visitante,
            gols_pro: gols_pro_mandante,
            gols_contra: gols_contra_mandante,
            gols_saldo: gols_saldo_mandante,
        });

        await rodadaModelVisitante.save();
        await rodadaModelMandante.save();

        const jogo = await Jogo.create({
            ano,
            rodada,
            visitante,
            mandante,
            placar_visitante,
            placar_mandante,
            vencedor,
        });

        await jogo.save();

        return res.send({ jogo });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating new project', err });
    }
});

router.put('/:projectId', async (req, res) => {
    try {
        const { title, description, tasks } = req.body;

        const project = await Project.findByIdAndUpdate(req.params.projectId,{
            title,
            description
        }, { new: true });

        project.tasks = [];
        await Task.remove({ project: project._id });

        await Promise.all(tasks.map(async task => {
            const projectTask = new Task({ ...task, project: project._id });

            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();

        return res.send({ project });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating project', err });
    }
});

router.delete('/:projectId', async (req, res) => {
    try {
        await Project.findByIdAndRemove(req.params.projectId);

        return res.send();
    } catch (err) {
        return res.status(400).send({ error: 'Error deleting project' });
    }
});

module.exports = app => app.use('/jogos', router);
