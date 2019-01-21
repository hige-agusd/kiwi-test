export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const addText = state => {
    const newState = {...state};
    const selectedWord = newState.selectedWord[0] * 3 + newState.selectedWord[1];
    let newWord = newState.suggestedWords ? newState.suggestedWords[selectedWord] : '';
    newState.text += newWord ? newWord : '';
    newState.suggestedWords = null;
    newState.selectedWord = [0,0];
    return newState;
}