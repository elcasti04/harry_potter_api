import express from 'express';
import pelisRoutes from '../routes/api/pelis.routes.js';

const app = express();

app.use(express.json());
app.use(pelisRoutes);

app.get('/favicon.ico', (req, res) => res.status(204));


app.get('/', (req, res) => {
  res.json({ status: 'API OK' });
});

export default app;
