const express = require('express');
const connectDB = require('./config/database')

const app = express();
connectDB();
app.use('/api/movies')
app.use('/api/auth')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on ${PORT}...`))
