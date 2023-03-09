import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './utils/error-handler.js';
import apiRouter from './api-router.js';
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.get('/', (_req, res) => {
  res.json('My Server is up');
});
app.use(express.json());
app.use('/api/v1', apiRouter);

app.use(errorHandler);
export default app;
