import * as actionTypes from '../actions/actionTypes';
export default function noteReducer (state = [], action) {
  switch(action.type) {
    case 'CREATE_NOTE': 
      state = [ 
          ...state, 
          Object.assign({}, action.note)
      ];
      return state;
    case 'SAVE_NOTE': {
      state = [...state];
      const index = state.findIndex(note => note.id === action.note.id);
      state[index] = Object.assign({}, action.note);
      return state;
    }
    case actionTypes.LOAD_NOTES_SUCCESS:
      return action.notes;
    case actionTypes.SAVE_NOTE_SUCCESS: {
      state = [...state];
      const index = state.findIndex(note => note.id === action.note.id);
      if (index >= 0) {
        state[index] = Object.assign({}, action.note);
      } else {
        state.push(action.note);
      }
      return state;
    }
    default: 
      return state;
  }
}