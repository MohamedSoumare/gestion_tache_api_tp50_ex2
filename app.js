import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import taskRoutes from './routes/taskRoute.js'; 
import { syncDB } from './models/Task.js'; 


dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use(taskRoutes);


app.use((req, res) => {
  res.status(404).json({ error: 'Route non trouvée.' });
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erreur serveur.' });
});

syncDB().then(() => {
  
  const port = process.env.PORT || 3005;
  app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
  });
}).catch((error) => {
  console.error('Erreur lors de la connexion à la base de données :', error);
});

