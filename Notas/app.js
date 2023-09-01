const express = require('express');
const bodyParser = require('body-parser');
const app = express(); const port = 3000;
const notes = require('./notes');
// Importa la lista de notas
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => { res.render('index', { notes }); });
app.get('/add', (req, res) => {
    res.render('addNote');
});
app.post('/add', (req, res) => {
    const { title, content } = req.body;
    const newNote = { title, content };
    notes.push(newNote);
    res.redirect('/');
});
app.listen(port, () => { console.log(`La aplicación está corriendo en http://localhost:${port}`); });