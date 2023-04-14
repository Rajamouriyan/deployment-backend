// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const orders = require('./routes/api/orders');


const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Backend Application for Deployment Practice'));

// use Routes
app.use('/api/orders', orders);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));