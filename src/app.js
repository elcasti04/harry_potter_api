import express from 'express';
import pelisRoutes from '../routes/api/pelis.routes.js';

const app = express();

app.use(express.json());
app.use(pelisRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'API OK' });
});

export default app;
