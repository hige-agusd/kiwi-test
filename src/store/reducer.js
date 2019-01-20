import * as actionTypes from './actionTypes';
import { updateObject, addText } from './utility';

const initialState = {
    suggestedWords: null,
    text: '',
    selectedWord: [0, 0]
};

const setWords = (state, action) => {
    const words = updateObject(state, action);
    return words;
};

const setSelectedWord = (state, action) => {
    const selectedWord = updateObject(state, action);
    return selectedWord;
}

const setText = (state, action) => {
    let retState = state;
    switch (action.digit) {
        case 0: retState = addText(state); 
        retState.text += ' ';
        break;
        case 1: retState = addText(state); break;
        default: retState = addText(state);
    }
    return retState;
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_WORDS: return setWords(state, action);
        case actionTypes.MOVE_CURSOR: return setSelectedWord(state, action);
        case actionTypes.SET_TEXT: return setText(state, action);
        default: return state;
    }
};

export default reducer;