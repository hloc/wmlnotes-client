import * as actionTypes from '../actions/actionTypes';
import axios from 'axios';

export function loadNotesSuccess(notes) {
  return { type: actionTypes.LOAD_NOTES_SUCCESS, notes };
}

export function saveNoteSuccess(note) {
  return { type: actionTypes.SAVE_NOTE_SUCCESS, note };
}

export function loadNotes() {
  return dispatch => {
      const options = {
        method: 'get',
        url: '/api/notes'
      };
      return axios(options)
        .then(response => {
          dispatch(loadNotesSuccess(response.data));
        })
        .catch(error => {
          throw(error);
        });
  };
}

export function saveNote(note) {
  return dispatch => {
    const options = {
      method: 'post',
      url: '/api/note',
      data: note
    };
    axios(options)
      .then(response => {
        dispatch(saveNoteSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}