import delay from './delay';

// Mocks a web API 
const notes = [
  {
    id: "note1",
    val: "note 1"
  },
  {
    id: "note2",
    val: "note 2"
  }
];

class NoteApi {
  static getNotes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], notes));
      }, delay);
    });
  }

  static saveNote(note) {
    note = Object.assign({}, note);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (note.id) {
          const existingCourseIndex = notes.findIndex(a => a.id == note.id);
          notes.splice(existingCourseIndex, 1, note);
        } else {
          note.id = `note${notes.length + 1}`;
          notes.push(note);
        }

        resolve(note);
      }, delay);
    });
  }
}

export default NoteApi;