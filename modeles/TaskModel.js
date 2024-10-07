import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TaskModel = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending'
  }
}, {
  timestamps: true
});

// Synchronisation du modèle avec la base de données
const syncDB = async () => {
  try {
    await TaskModel.sync();
    console.log('Le modèle Task est synchronisé avec la base de données.');
  } catch (error) {
    console.error('Erreur de synchronisation:', error);
  }
};

export { TaskModel, syncDB };
