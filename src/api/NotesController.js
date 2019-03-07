import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

class NotesController {
  constructor() {
    const adpater = new FileSync('db.json');
    this.lowdb = low(adpater);
    this.lowdb.defaults({ 
      notes: [
        {
          id: 'note1',
          val: 'my 1st note'
        },
        {
          id: 'note2',
          val: 'my 2nd note'
        }
      ]
    }).write();
  }

  getNotes(req, res) {
    res.send(this.lowdb.get('notes').value());
  }

  saveNote(req, res) {
    const note = req.body;
    const notes = this.lowdb.get('notes').value();
    if (note.id) {
      this.lowdb.get('notes')
        .find({id: note.id})
        .assign(note)
        .write();
    } else {
      note.id = `note${notes.length + 1}`;
      this.lowdb.get('notes')
        .push(note)
        .write();
    }

    res.send(note);
  }
}

export default NotesController;