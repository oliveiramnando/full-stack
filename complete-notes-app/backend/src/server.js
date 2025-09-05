require('dotenv').config();
const express = require("express");

const notesRoutes = require('./routes/notesRoutes.js');
const { connectDB } = require('./config/db.js');

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

app.use('/api/notes', notesRoutes);
 
app.listen(process.env.PORT, () => {
    console.log("Server started on PORT:", PORT);
});