const express = require('express');
const router = express.Router();
const note = require('../db/note')

// when loaclhost:3000/api/notes 
router.get('/notes', (req, res) => {
  //  const notes = note.read()
  //  res.jason(notes);
  note.getNotes()
    .then((notes) => {
        console.log(notes)
        return res.json(notes);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    // utilize your note.addNote(req.body) function
        // .then()
        // . catch()
});

router.delete('/notes/:id', (req, res) => {
    // utilizie a note.deleteNote(req.params.id)
})

module.exports = router;