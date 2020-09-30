const Task = require('../models/task-model');

/** Page d'Accueil */
exports.index = async (req, res) => {
    try {

        // Récupération des tâches cf. async/await node-js
        const tasks = await Task.find({status: false}).exec();
        // console.log(tasks);

        // Transmission à la vue
        res.render('index', {
            pageTitle: 'Mes tâches à faire',
            tasks: tasks.map(task => task.toJSON())
        });

    } catch (err) {

        return res.status(500).send({
           message: err.message
        });

    }
}

/** Page affichant les tâches terminées */
exports.done_tasks = async (req, res) => {
    try {
        const tasks = await Task.find({status: true}).exec();
        res.render('index', {
            pageTitle: 'Mes tâches terminées',
            tasks: tasks.map(task => task.toJSON())
        });
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }
}

/** Ajouter une tâche (Formulaire) */
exports.task_get = (req, res) => {
    res.render('form-task');
}

/** Ajouter une tâche (Traitement POST) */
exports.task_post = (req, res) => {

    const task = new Task(req.body);
    task.save(err => {
        res.redirect('/');
    });

    res.render('form-task');
}
