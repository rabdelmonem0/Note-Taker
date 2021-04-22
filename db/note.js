const fs = require('fs');
const util = require('util');
// const uuidv1 = require('uuid/v1')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Note {
    read(){
       // fs.readFile("./db.json", "utf-8").then((data) => JSON.parse(data));
       return readFileAsync('db/db.json', 'utf-8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }
    getNotes() {
        // read the db file to see if there are any notes
        return this.read().then((notes) => {
            let parseNotes;

            try {
                parseNotes = [].concat(JSON.parse(notes));
            } catch {
                parseNotes = []
            }
            return parseNotes;
        });
            // with the notes
            // try --> parse notes (there are notes)
            // catch --> parase notes is empty [] (there are no notes)
        // return notes array
    }
    addNote(note) {
        // check if body or title is empty, if so send error
        const { title , text } = note;

        if (!title || !text) {
            return new Error('Must enter title and text');
        }

     //   const newNote = { title, text, id: uuidv1() }

        // creare newNote 
        return this.getNotes()
            // add the newNote to all the notes [...notes, newNotes]
            .then(notes => [...notes, note])
            .then(allNotes => this.write(allNotes))
            .then(() => note);
            // update the notes db by using the write function
            // then return new note
    }      
    // deleteNote(id) {
        // get the specific note
        // remove it from the notes array
   // }
}

module.exports = new Note();