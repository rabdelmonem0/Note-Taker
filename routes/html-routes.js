const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/notes', (req, res) => {
    // send the notes page
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
    // send the index.html
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;