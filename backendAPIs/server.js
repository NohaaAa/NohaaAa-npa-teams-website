const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan')
var cors = require('cors')
const app = express();

//setup logger
app.use(morgan('dev'))

//using cors
app.use(cors())

//connecting with DB
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
app.use(express.json());
db.once('open', () => console.log('connected to database'));
//creating routes
const teamsRouter = require('./routes/teams');
const homeRouter = require('./routes/home');
const subscriptionRouter = require('./routes/subscriptions');

app.use('/api/teams', teamsRouter);
app.use('/api/home', homeRouter);
app.use('/api/subscriptions', subscriptionRouter);

app.use('/*', (req, res) => {
    res.status(404).send('<h1>NOT FOUND</h1>')
})

//server listen on port
const PORT = 3030;
app.listen(PORT, () => console.log(`Your server is running on: http://localhost:${PORT}/`));