import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';
import express from 'express';
import promptRouter from './routes/prompt.router.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', promptRouter);

export default app;