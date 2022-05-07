const express = require('express');
const userRouter = require('./Routes/userRoutes');
const stocksRouter = require('./Routes/stockRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/user', userRouter);

app.use('/api/v1/stocks', stocksRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
