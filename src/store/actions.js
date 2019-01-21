import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setMode = mode => {
    return {
        type: actionTypes.SET_MODE,
        mode: (mode === 'dict') ? mode : ''
    }
};

export const setWords = data => {
    return {
        type: actionTypes.SET_WORDS,
        suggestedWords: data,
    }
};

export const backspace = () => {
    return {
        type: actionTypes.BACKSPACE
    }
};

export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}

export const setText = (digit) => {
    return {
        type: actionTypes.SET_TEXT,
        digit: digit
    }
};

export const moveCursor = direction => {
    return dispatch => {
        dispatch({type: actionTypes.MOVE_CURSOR,
        selectedWord: direction})
    }
};

export const getWords = (digits, mode) => {
    console.log(digits);
    return dispatch => {
        axios.get(`http://localhost:3003/t9${mode}/${digits}` )
            .then(res => {
                dispatch(setWords(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
};