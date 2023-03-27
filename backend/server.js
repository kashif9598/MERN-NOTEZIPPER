const express = require('express');
const app = express();
const dotenv = require('dotenv');
const notes = require('./data/notes');
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get('/',(req, resp) => {
    resp.send('Server started')
})

app.get('/notes', (req, resp) => {
    resp.json(notes);
})

app.get('/notes/:id', (req, resp) => {
    const note = notes.find((n) => n._id === req.params.id)
    console.log(note)
    resp.json(note);
})
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));