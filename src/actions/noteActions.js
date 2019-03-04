export function createNote(note) {
    return { type: 'CREATE_NOTE', note}; 
}

export function saveNote(note, index) {
    debugger;
    return { type: 'SAVE_NOTE', payload: { note, index }};
}