const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Time = require('../models/time');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        const time = await Time.find();

        return res.send({ time });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar times' });
    }
});

router.get('/:timeId', async (req, res) => {
    try {
        const time = await Time.findById(req.params.timeId);

        return res.send(time);
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao buscar detalhe do time' });
    }
});

router.post('/', async (req, res) => {
    try {

        const time = await Time.create(req.body);

        await time.save();

        return res.send({ time });
    } catch (err) {
        return res.status(400).send({ error: 'Erro ao criar time', err });
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

module.exports = app => app.use('/time', router);
