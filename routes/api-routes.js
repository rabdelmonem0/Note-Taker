const express = require('express');
const router = express.Router();
const note = require('../db/note')

// when loaclhost:3000/api/notes 
router.get('/notes', (req, res) => {
//    const notes = note.read()
  //  res.jason(notes);
  note.getNotes()
    .then((notes) => {
        console.log(notes)
        return res.json(notes);
    })
    .catch(err => res.status(500).json(err));
});

router.post('/notes', async (req, res) => {
    try {
        const addNote = await note.addNote(req.body);
        res.status(200).jason(addNote);
    } catch (err) {
        res.status(400).jason(err);
    }
    
    // note.addNote(req.body)
    // .then((notes) => {
    //     return res.json(notes)
    // })
    // .catch(err => res.status(500).json(err))
    // utilize your note.addNote(req.body) function
        // .then()
        // . catch()
});

router.delete('/notes/:id', (req, res) => {
    const deleteNote = note.destroy({
        where: {
          id: req.params.id,
        },
      }).catch((err) => res.json(err));
      res.json(deleteNote);
    // const deleteNotes = note.destroy({
    //     where: {
    //         notes/:id: req.params.notes/:id,
    //     }
    // })
    // utilizie a note.deleteNote(req.params.id)
})

module.exports = router;