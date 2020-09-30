const express = require('express');
const router = express.Router();
const defaultController = require('../controller/default-controller');
const taskController = require('../controller/task-controller');

/** Définition de nos routes */
router.get('/', defaultController.index);
router.get('/mes-taches-terminees.html', defaultController.done_tasks);

router.get('/tasks/:id/done', taskController.update_get);
router.get('/tasks/:id/delete', taskController.delete_get);

router.get('/ajouter-une-tache.html', defaultController.task_get);
router.post('/ajouter-une-tache.html', defaultController.task_post);

/** Exportation des routes */
module.exports = router;
