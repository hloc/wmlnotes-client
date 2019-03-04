export default function noteReducer (state = [], action) {
    switch(action.type) {
        case 'CREATE_NOTE': 
            state = [ 
                ...state, 
                Object.assign({}, action.note)
            ];
            return state;
        case 'SAVE_NOTE':
            state = [...state];
            state[action.payload.index] 
                = Object.assign({}, action.payload.note);
            return state;
        default: 
            return state;
    }
}