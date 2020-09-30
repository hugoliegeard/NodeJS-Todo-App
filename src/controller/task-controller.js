const Task = require('../models/task-model');

/** Mise à jour du statut d'une tâche */
exports.update_get = async (req, res) => {

    try {

        // Mise à jour du status de la tâche
        const task = await Task.findByIdAndUpdate(req.params.id, {status: true}).exec();

        // Redirect sur la page d'accueil
        res.redirect('/');

    } catch (err) {
        res.status(500).send({
           message: err.message
        });
    }

}

/** Suppression d'une tâche */
exports.delete_get = async (req, res) => {

    try {

        // Mise à jour du status de la tâche
        await Task.findByIdAndDelete(req.params.id).exec();

        // Redirect sur la page d'accueil
        res.redirect('/mes-taches-terminees.html');

    } catch (err) {
        res.status(500).send({
            message: err.message
        });
    }

}
