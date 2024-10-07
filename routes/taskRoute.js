import { Router } from 'express';
import TaskController from '../controllers/TaskController.js';
import TaskValidator from '../validators/taskValidator.js';

const router = Router();

// Créer une tâche avec validation
router.post(
  '/tasks',
  TaskValidator.validateTask(), 
  TaskValidator.checkValidation,
  TaskController.createTask
);

router.put(
  '/tasks/:id',
  TaskValidator.validateTask(), 
  TaskValidator.checkValidation, 
  TaskController.updateTask
);

router.get('/tasks', TaskController.getAllTasks);
router.get('/tasks/:id', TaskController.getTaskById);
router.delete('/tasks/:id', TaskController.deleteTask);

export default router;
