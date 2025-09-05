const express = require("express");
const notesRoutes = require('./routes/notesRoutes.js');

const app = express();

app.use('/api/notes', notesRoutes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});