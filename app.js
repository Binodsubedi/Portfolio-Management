const express = require('express');
const userRouter = require('./Routes/userRoutes');
const stocksRouter = require('./Routes/stockRoutes');

const app = express();
const cors = require('cors');

app.use(express.json());

app.use(cors({ origin: 'http://localhost:3001' }));

app.use('/api/v1/user', userRouter);

app.use('/api/v1/stocks', stocksRouter);

module.exports = app;
