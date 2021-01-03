const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan')
const app = express();

//setup logger
app.use(morgan('dev'))
//connecting with DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
app.use(express.json());
db.once('open', () => console.log('connected to database'));
//creating routes
const teamsRouter = require('./routes/teams')
app.use('/teams', teamsRouter)


//server listen on port
const PORT = 3030;
app.listen(PORT, () => console.log(`Your server is running on: http://localhost:${PORT}/`));