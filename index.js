const express = require('express');
const authRouter = require('./routes/authRoutes');
const kycRoute = require('./routes/kycRoute');
const transactionRoutes = require('./routes/transactionRoutes');
const escrowRoutes = require ('./routes/escrowRoutes');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const dotenv = require('dotenv').config({ path: './.env' }); //config
const app = express();
const dbConnect = require('./config/dbConnect');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Connect DB
dbConnect();

// Set up Cron to prevent Render server from sleeping
app.get('/stay-awake', (req, res, next) => {
  res.status(200);
  res.send({ message: 'Wake up' });
});

app.use('/api/user', authRouter);
app.use('/api/kyc', kycRoute);
app.use('/api/transaction', transactionRoutes);
app.use('/api/escrow', escrowRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
