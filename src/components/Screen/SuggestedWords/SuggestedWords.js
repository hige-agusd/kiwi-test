import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './SuggestedWords.css';

const suggestedWords = (props) => {
    const groupedWords = [];
    let wordsList = null;
    if (props.words) {
        const propsWords = [...props.words];
        const wordsListLength = propsWords.length;
        const longWords = propsWords[0].length > 5 ? (propsWords[0].length > 8) ? 'longest-words' : 'long-words' : '';
        for (let i = 0; i < wordsListLength; i += 3) {
            groupedWords.push(propsWords.splice(0, 3));
        }
        wordsList = (
            <div className={'words-wrapper'}>
                <Grid fluid={true} className={'suggested-words'}>
                    {groupedWords.map((wordsGroup, row) => (
                        <Row className={longWords} key={row} >
                            {wordsGroup.map((word, col) => {
                                const isSelected = (props.selected[0] === row && props.selected[1] === col) ? 'selected' : '';
                                return <Col xs={4} className={isSelected} key={word}>{word}</Col>
                            })}
                        </Row>
                    ))}
                </Grid>
            </div>);
            const element = document.getElementsByClassName('suggested-words')[0];
            if(element) {
                element.scrollTop = props.selected[0] * 24;
            }
    }
    return (
        <>
            {wordsList}
        </>
    );
}

export default suggestedWords;