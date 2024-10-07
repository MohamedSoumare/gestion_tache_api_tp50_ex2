import TaskModel from '../models/TaskModel.js';

class TaskController {
  
  static async createTask(req, res) {
    try {
      const task = await TaskModel.create(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la création de la tâche.' });
    }
  }

  // Lire toutes les tâches
  static async getAllTasks(req, res) {
    try {
      const tasks = await TaskModel.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des tâches.' });
    }
  }

  // Lire une tâche par ID
  static async getTaskById(req, res) {
    try {
      const task = await TaskModel.findByPk(req.params.id);
      if (!task) return res.status(404).json({ error: 'Tâche non trouvée.' });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération de la tâche.' });
    }
  }

  // Mettre à jour une tâche
  static async updateTask(req, res) {
    try {
      const task = await TaskModel.findByPk(req.params.id);
      if (!task) return res.status(404).json({ error: 'Tâche non trouvée.' });

      await task.update(req.body);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la mise à jour de la tâche.' });
    }
  }

  // Supprimer une tâche
  static async deleteTask(req, res) {
    try {
      const task = await TaskModel.findByPk(req.params.id);
      if (!task) return res.status(404).json({ error: 'Tâche non trouvée.' });

      await task.destroy();
      res.status(204).send(); // Pas de contenu pour une suppression réussie
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression de la tâche.' });
    }
  }
}

export default TaskController;
