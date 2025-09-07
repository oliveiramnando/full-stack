require('dotenv').config();
const express = require("express");

const notesRoutes = require('./routes/notesRoutes.js');
const { connectDB } = require('./config/db.js');
const rateLimiter = require('./middlewares/rateLimiter.js');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(() => { // connect to the DB and then start listening
    app.listen(process.env.PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
})