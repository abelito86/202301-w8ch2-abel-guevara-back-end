import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.get('/', (_req, res) => {
  res.json('My Server is up');
});
app.use(express.json());
app.use('/api/v1', () => {});

export default app;
