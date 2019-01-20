import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setWords = data => {
    return {
        type: actionTypes.SET_WORDS,
        suggestedWords: data,
    }
}

export const setText = (digit) => {
    return {
        type: actionTypes.SET_TEXT,
        digit: digit
    }
}

export const moveCursor = direction => {
    return dispatch => {
        dispatch({type: actionTypes.MOVE_CURSOR,
        selectedWord: direction})
    }
}

export const getWords = (digits) => {
    console.log(digits);
    return dispatch => {
        axios.get('http://localhost:3003/t9/' + digits )
            .then(res => {
                dispatch(setWords(res.data));
            })
            .catch(err => {
                console.log(err);
            })
    }
}