import { body, validationResult } from 'express-validator';

class TaskValidator {
 
  static validateTask() {
    return [
      body('title')
        .notEmpty().withMessage('Le titre est requis.')
        .isLength({ min: 3 }).withMessage('Le titre doit comporter au moins 3 caractères.'),
      
      body('description')
        .notEmpty().withMessage('La description est requise.')
        .isLength({ min: 10 }).withMessage('La description doit comporter au moins 10 caractères.'),
      
      body('status')
        .optional()
        .isIn(['pending', 'in-progress', 'completed']).withMessage('Le statut doit être "pending", "in-progress" ou "completed".')
    ];
  }

  // Gestion des erreurs de validation
  static checkValidation(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
}

export default TaskValidator;
